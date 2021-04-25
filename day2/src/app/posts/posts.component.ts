import { Component, OnInit } from '@angular/core';
import { IPost } from '../Interfaces/Ipost';
import { PostService } from '../sevice/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postList:IPost[]=[];

  constructor(private postServices:PostService) { }
  errorMsg:string
  ngOnInit(): void {
    this.postServices.returnAllPosts().subscribe(
      employeeData=>
      {
        this.postList=employeeData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    )
  }
}
