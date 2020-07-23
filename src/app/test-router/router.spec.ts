/* tslint:disable:no-unused-variable */
import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick, flush } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { HomeComponent, SearchComponent, AppComponent, routes } from "./router";

describe("Router: App", () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [HomeComponent, SearchComponent, AppComponent]
    });

    //lấy reference của Router và Location
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    //tạo component để router-outlet có thể insert
    fixture = TestBed.createComponent(AppComponent);
    //set up location change listener và khởi tạo init navigation
    router.initialNavigation();
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/home");
    });
    tick()
  }));

  it('navigate to "search" takes you to /search', fakeAsync(() => {
    router.navigate(["/search"]).then(() => {
      expect(location.path()).toBe("/search");
    });
    tick()
  }));
});