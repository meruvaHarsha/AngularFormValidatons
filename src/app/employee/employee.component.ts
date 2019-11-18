import { Component, OnInit, Input } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  @Input() user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  save(): void {
    this.userService.updateHero(this.user)
      .subscribe(users => this.user = users);
      console.log(this.user)
  }
  
}
