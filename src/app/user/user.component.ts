import { Component, OnInit, ɵConsole } from '@angular/core';

import{User} from '../User'
import {UserService} from '../user.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  selectedUser: User;
  users:User[];
  constructor(private userService: UserService) { }
  

  getHeroes(): void {
    this.userService.getHeroes()
        .subscribe(users => this.users = users);
        
  }
  
  deleteStudent(user:User){
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteHero(user).subscribe();

  }
  


  onSelect(user: User): void {
    this.selectedUser = user;
  }
  ngOnInit() {
   this.getHeroes();
   
  }
  
}
