// import {
//   async,
//   ComponentFixture,
//   TestBed,
//   fakeAsync,
//   tick,
// } from '@angular/core/testing';

// import { UserComponent } from './user.component';
// import { UserService } from './user.service';
// import { DataService } from '../shared/data.service';

// describe('UserComponent', () => {
//   let component: UserComponent;
//   let fixture: ComponentFixture<UserComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [UserComponent],
//     });
//     // setTimeout(() => {
//     //   console.log('time out 1000ms')
//     // }, 1000);
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it("shouldn't fetch data success if not call async", () => {
//     fixture = TestBed.createComponent(UserComponent);
//     component = fixture.componentInstance;
//     let dataService = fixture.debugElement.injector.get(DataService);
//     spyOn(dataService, 'getDetailsAsync').and.returnValue(Promise.resolve('data12'));
//     fixture.detectChanges();
//     expect(component.data).toBe(undefined);
//   });

//   it('shouldn fetch data success if async', async(() => {
//     fixture = TestBed.createComponent(UserComponent);
//     component = fixture.componentInstance;
//     let dataService = fixture.debugElement.injector.get(DataService);
//     spyOn(dataService, 'getDetailsAsync').and.returnValue(Promise.resolve('data12'));
//     fixture.detectChanges();
//     fixture.whenStable().then(() => {
//       expect(component.data).toBe('data12');
//     });
//   }));

//   it('shouldn fetch data success if async', fakeAsync(() => {
//     fixture = TestBed.createComponent(UserComponent);
//     component = fixture.componentInstance;
//     let dataService = fixture.debugElement.injector.get(DataService);
//     spyOn(dataService, 'getDetailsAsync').and.returnValue(Promise.resolve('data12'));
//     fixture.detectChanges();
//     tick();
//     expect(component.data).toBe('data12');
//   }));
// });

// //TEST async, fakeAsync, tick