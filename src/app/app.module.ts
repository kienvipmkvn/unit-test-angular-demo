import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { SeasonComponent } from './season/season.component';
import { TestPipePipe } from './test-pipe/test-pipe.pipe';
import { TestDirectiveDirective } from './test-directive/test-directive.directive';
import { TestLoginComponent } from './test-login/test-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TestComponentComponent,
    SeasonComponent,
    TestPipePipe,
    TestDirectiveDirective,
    TestLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
