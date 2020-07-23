import { AuthService } from './auth.service';
import { DataService } from '../shared/data.service';
import { TestBed } from '@angular/core/testing';

describe('service test', () => {
  //test with real DataService
  it("should return 'data sync'", () => {
    let authService: AuthService;
    let dataService: DataService;
    dataService = new DataService();
    authService = new AuthService(dataService);

    authService.isLoggedin = true;
    authService.getData();
    expect(authService.data).toBe('data sync');
  });

  it("should return 'data async' from promise", (done: DoneFn) => {
    let authService: AuthService;
    let dataService: DataService;
    dataService = new DataService();
    authService = new AuthService(dataService);

    authService.isLoggedin = true;
    authService.getDataAsync();
    authService.data.then((data) => {
      expect(data).toBe('data async');
      done();
    });
  });

  //test with fake DataService
  it('test dependence', () => {
    let dataServiceFake = {
      getDetails: function getDetails() {
        return 'data fake';
      },
    };
    let authService: AuthService = new AuthService(
      dataServiceFake as DataService
    );
    authService.isLoggedin = true;
    authService.getData();
    expect(authService.data).toBe('data fake');
  });

  //test with spy
  it('test dependence with spy', () => {
    //create spy
    const dataServiceSpy = jasmine
      .createSpyObj('DataService', ['getDetails'])
    //set return value for getDetails()
    dataServiceSpy.getDetails.and.returnValue('data with spy');
      
    let authService = new AuthService(dataServiceSpy);
    authService.isLoggedin = true;
    authService.getData();
    expect(authService.data).toBe('data with spy');
  });

  it('test dependence with spy async', (done: DoneFn) => {
    //create spy
    const dataServiceSpy = jasmine
      .createSpyObj('DataService', ['getDetailsAsync'])
    //set return value for getDetails()
    dataServiceSpy.getDetailsAsync.and.returnValue(Promise.resolve('data with spy async'));
      
    let authService = new AuthService(dataServiceSpy);
    authService.isLoggedin = true;
    authService.getDataAsync();
    authService.data.then(data=>{
      expect(data).toBe('data with spy async');
      done();
    })
  });
  
  //use TestBed
  it('test dependence with tedbed', ()=>{
    //tạo module
    TestBed.configureTestingModule({providers:[DataService]});
    let dataService = TestBed.inject(DataService);

    let authService = new AuthService(dataService);
    authService.isLoggedin = true;
    authService.getData();
    expect(authService.data).toBe('data sync')
  })
});
