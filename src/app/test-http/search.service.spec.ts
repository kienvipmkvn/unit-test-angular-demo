import { HttpErrorResponse } from '@angular/common/http';
import { HeroService } from './hero.service';
import { of, throwError } from 'rxjs';
import { Hero } from './hero.service'


describe('Service: Search', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let heroService: HeroService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    heroService = new HeroService(<any>httpClientSpy);
  });

  it('should return expected heroes (HttpClient called once)', () => {
    const expectedHeroes: Hero[] = [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
    ];

    httpClientSpy.get.and.returnValue(of(expectedHeroes));

    heroService
      .getHeroes()
      .subscribe(
        (heroes) => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });

    httpClientSpy.get.and.returnValue(throwError(errorResponse));

    heroService.getHeroes().subscribe(
      () => fail('expected an error, not heroes'),
      (error) => expect(error.message).toContain('test 404 error')
    );
  });
});
