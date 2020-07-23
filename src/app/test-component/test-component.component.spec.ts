import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentComponent } from './test-component.component';
import { AuthService } from '../test-service/auth.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('test component', () => {
  let component: TestComponentComponent;
  let fixture: ComponentFixture<TestComponentComponent>;
  //mocks service
  let authServiceFake = {
    isAuthenticated() {
      return Promise.resolve(false);
    },
  };
  let el: DebugElement;

  beforeEach(() => {
    //inject dependence mock service
    TestBed.configureTestingModule({
      declarations: [TestComponentComponent],
      providers: [{ provide: AuthService, useValue: authServiceFake }],
    });
    //tạo fixture
    fixture = TestBed.createComponent(TestComponentComponent);
    //lấy component class instance
    component = fixture.componentInstance;
    //lấy template
    el = fixture.debugElement.query(By.css('a'));
  });

  //this test would failed
  xit('test without async', () => {
    fixture.detectChanges();
    expect(el.nativeElement.textContent).toBe('Login');
    spyOn(authServiceFake, 'isAuthenticated').and.returnValue(
      Promise.resolve(true)
    );
    component.ngOnInit();
    fixture.detectChanges();
    expect(el.nativeElement.textContent).toBe('Logout');
  });

  it('test use async and whenStable', async(() => {
    fixture.detectChanges();
    expect(el.nativeElement.textContent).toContain('Login');
    spyOn(authServiceFake, 'isAuthenticated').and.returnValue(
      Promise.resolve(true)
    );
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.nativeElement.textContent).toBe('Logout');
    });
    component.ngOnInit();
  }));
});
