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
    totalStudents: number
    page: number = 0
    size: number = 5

    costructor(private postService: PostService, private router: Router){}

    ngOnInit(){
        this.postService.getTotal().subscribe(totalResponse => {
            this.totalPosts = totalResponse
            this.getAll()
        }, error => {
            console.error(error)
            alert("Error: " +error.error.message)
        })
    }

    getAll() {
        this.postService.getFromTo(this.page, this.size).subscribe(response => {
        this.postList = response
        }, error => {
        console.error(error)
        alert('Error: ' + error.error.message)
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