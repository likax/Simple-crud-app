import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {HttpClientModule} from '@angular/common/http';

import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UpperDirective } from './upper.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserFormComponent,
    UsersComponent,
    UserComponent,
    UpperDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
