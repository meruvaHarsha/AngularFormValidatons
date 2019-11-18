import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserFormComponentComponent } from './user-form-component/user-form-component.component';
const routes: Routes = [
 
  {path:'userForms', component:UserFormComponentComponent},
  { path: 'detail/:id', component: EmployeeComponent },
  { path: 'user', component: UserComponent }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
