import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { PostService } from 'src/app/services/post.service'
import { Post } from 'src/app/models/post'

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
  })
  export class PostListComponent implements OnInit {
  
    studentList = new Array<Student>()
   

    costructor(private postService: PostService, private router: Router){}

    ngOnInit(){

        this.student.dni = ''
        this.student.lastName = ''

        this.studentForm = new FormGroup({
            'lastName': new FormControl(this.student.lastName, Validators.required)
        })  
    
        get dni() { return this.studentForm.get('dni') }
        get lastName() { return this.studentForm.get('lastName') }

        this.postService.getAll().subscribe(totalResponse => {
            this.totalPosts = totalResponse
        }, error => {
            console.error(error)
            alert("Error: " +error.error.message)
        })
    }

    delete(id) {
        this.postService.delete(id).subscribe(() => {
        location.reload()
        alert('Baja Exitosa!')
        }, error => {
        console.error(error)
        if (error.status === 500) {
            alert('Error: ')
        }
        })
    }

    addPost() {
        let post = new Post()
        post.text = this.post.value
        post.userId = this.userId.value

        this.postService.add(post).subscribe(() => {
            this.text.setValue('')
            this.userId.setValue('')
            alert('Alta Exitosa!')
      document.getElementsByTagName("input")[0].focus()
    }, error => {
      console.error(error)
      alert('Error: ' + error.error.message)
      document.getElementsByTagName('input')[0].focus()
    })
  }
}