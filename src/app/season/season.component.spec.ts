import { SeasonComponent } from './season.component';

describe('Season Spy demo', () => {
  
  it('should be summer', () => {
    //có thể thay đổi season trực tiếp qua hàm nextSeason
    let s = new SeasonComponent();
    s.getNextSeason();
    expect(s.season).toBe('summer');
  });

  it('spyOn callThrought example', function () {
    var s = new SeasonComponent();
    //thêm spyOn
    //spyOn(s, 'nextSeason');
    spyOn(s, 'nextSeason').and.callThrough();
    s.getNextSeason();
    expect(s.season).toEqual('summer');
  });

  it('spyOn returnValue example', function () {
    var s = new SeasonComponent();
    //thêm spyOn
    spyOn(s, 'nextSeason').and.returnValue('winter');
    expect(s.nextSeason()).toEqual('winter');
  });

  it('spyOn callFake example', function () {
    var s = new SeasonComponent();
    //thêm spyOn
    spyOn(s, 'nextSeason').and.callFake(()=>{
      s.season = 'winter';
      return s.season;
    });
    expect(s.nextSeason()).toEqual('winter');
  });

  it('jasmine.createSpy example', function () {
    var s = new SeasonComponent();
    s.nextSeason = jasmine.createSpy().and.returnValue('winter')
    s.nextSeason();
    expect(s.nextSeason()).toBe('winter');
  });
});


//TEST SPY