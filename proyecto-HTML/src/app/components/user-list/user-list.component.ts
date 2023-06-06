import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  })
  export class UserListComponent implements OnInit {
    userList = new Array<Usuario>();
  
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.user.user = '';
    this.user.userId = '';

    this.userForm = new FormGroup({
      userId: new FormControl(this.user.userId, Validators.required),
    })

    get userName() { return this.userForm.get('userName') }
    get userId() { return this.userForm.get('userId') }


    this.userService.getAll().subscribe(totalResponse => {
      this.getAll = totalResponse
    }, error => {
      console.error(error)
      alert("Error: " +error.error.message)
    })
  }

  
}
