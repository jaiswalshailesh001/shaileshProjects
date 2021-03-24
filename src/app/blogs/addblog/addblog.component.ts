import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Blog, Guid } from '../model/blog.model';
import { BlogsService } from '../blogs.service';
import { UtilityService } from 'src/app/utility/utility.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  blog: Blog;
  actionType = "Add Blog";
  constructor(private service :BlogsService , private utility :UtilityService,
   private router :Router  ,public route: ActivatedRoute,) {
  }
  ngOnInit() {
    console.log('ADD')
    this.blog = new Blog();
    const id = this.route.snapshot.params.id;
    if (id) {
      this.getItemById(id);
      this.actionType = "Update Blog";
    }
  }

  getItemById(id: any) {
    this.blog = this.service.getBlogsById(id);
  }
  save(){
    if(this.blog.Content && this.blog.Content.trim() != ''){
      if(this.blog.Id){
        this.blog.LastModifiedDate = new Date();
        this.service.updateBlog(this.blog);
        this.utility.openSnackBar(" blog updated succesfully!","");
        this.router.navigate(['/blogs/view']);
      } else{
        this.blog.Id = Guid.newGuid();
        this.service.addnewBlog(this.blog);
        this.utility.openSnackBar(" blog added succesfully!","");
        this.router.navigate(['/blogs/view']);
      }
    } else{
      this.utility.openSnackBar("Please write something","");
   
    }
  }
}
