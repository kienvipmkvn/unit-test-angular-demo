import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestLoginComponent, User } from './test-login.component';

fdescribe('Component: Login', () => {
  let component: TestLoginComponent;
  let fixture: ComponentFixture<TestLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [TestLoginComponent],
    });

    fixture = TestBed.createComponent(TestLoginComponent);

    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    email.setValue('test');
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set email to something correct
    email.setValue('test@example.com');
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });

  it('password field validity', () => {
    let errors = {};
    let password = component.form.controls['password'];

    // Email field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    password.setValue('123456');
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Set email to something correct
    password.setValue('123456789');
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });

  it('submitting a form emits a user', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['email'].setValue('test@test.com');
    component.form.controls['password'].setValue('123456789');
    expect(component.form.valid).toBeTruthy();

    let user: User;
    // Subscribe observable and store user
    component.loggedIn.subscribe((value) => (user = value));

    component.login();

    expect(user.email).toBe('test@test.com');
    expect(user.password).toBe('123456789');
  });
});
