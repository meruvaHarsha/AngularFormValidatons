import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule }    from '@angular/common/http';
import { UserFormComponentComponent } from './user-form-component/user-form-component.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeeComponent,
    MessagesComponent,
    UserFormComponentComponent
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
