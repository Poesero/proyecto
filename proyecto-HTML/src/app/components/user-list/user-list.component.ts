import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


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
  
  delete(id){
    this.userService.delete(id).subscribe(() => {
      location.reload()
      alert('Baja Exitosa!')
    }, error => {
      console.error(error);
      if (error.status == 500) {
        alert('Error: ')
      }
    })
  }
    
  addUsuario() {
    let user = new Usuario()
    user.userMail = this.user.value
    user.userName = this.user.value
  
    this.userService.add(user).subscribe(() => {
      this.userMail.setValue('')
      this.userName.setValue('')
      alert('Alta Exitosa!')
      document.getElementsByTagName('input')[0].focus()
    }, error => {
      console.error(error)
      alert('Error: ' + error.error.message)
      document.getElementsByTagName('input')[0].focus()
    })
  }
}
