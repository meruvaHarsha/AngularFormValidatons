import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-user-form-component',
  templateUrl: './user-form-component.component.html',
  styleUrls: ['./user-form-component.component.css']
})
export class UserFormComponentComponent implements OnInit {
  constructor(private employeeService: EmployeeService) { }

  topics=['java','angular-js','nodejs'];

  topicHasError=true;
  employees:Employee[];

userModel=new Employee('Meruva Harsha','rob@gmail.com','9010478910','default','evening',true);

  validateTopic(value){
if(value=='default'){

  this.topicHasError=true;

}
else{
this.topicHasError=false;

}

  }
  getEmployees(): void {
    this.employeeService.getEmployees()
        .subscribe(users => this.employees = users);
        
  }

  ngOnInit() {
    this.getEmployees();
  }
 
  onsubmit(){
    console.log(this.userModel),
    this.employeeService.createEmployee(this.userModel).
    subscribe(
      data =>  console.log('sucess!',data),
      error=> console.log('error!',error),
      
        
    )
  }
}
