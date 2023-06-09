import { PostService } from 'src/app/services/post.service'
import { Component, OnInit, Input } from '@angular/core'
import { FormGroup, Validators, FormsModule, FormControl} from '@angular/forms';
import { Post } from 'src/app/models/post';
import { Router } from '@angular/router'
import { Usuario } from 'src/app/models/user';



@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
  })
  export class PostListComponent implements OnInit {
    imports:[FormsModule];
    
    @Input()
    postList = new Array<Post>()
    userList = new Array<Usuario>()
    postForm: FormGroup
    userId : string
    text : string

    costructor(private postService: PostService,private router: Router){}

    ngOnInit(){

        this.userId= '0'
        this.text = ''

        this.postForm = new FormGroup({
            'userId': new FormControl(this.userId, Validators.required)
        })  
    
   

        get value userId() ;{ return this.postForm.get('userId') }
        get text() ;{ return this.postForm.get('text') }


        this.postService.getAll().subscribe(totalResponse => {
            this.postList= totalResponse
        }, error => {
            console.error(error)
            alert("Error: " +error.error.message)
        })

        this.userService.getAll().subscribe(totalResponse => {
            this.userList = totalResponse
        }, error => {
            console.error(error)
            alert("Error: " +error.error.message)
        })

        
    }

    borrar(id:number) {
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

   updatePost(id:number) {
    let post = new Post();
    post.id = this.post.id
    post.text = this.post.text
    post.user= this.post.user
    post.userId= this.post.userId 


    this.postService.edit(post).subscribe(() => {
      alert('Modificación Exitosa!')
      this.router.navigateByUrl("/{id}/update")
    }, error => {
      console.error(error)
      alert('Error: ' + error.error.message)
    })
  }
}