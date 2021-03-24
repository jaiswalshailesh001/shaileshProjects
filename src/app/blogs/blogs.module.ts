import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs.component';
import { BlogsService } from './blogs.service';
import { SharedModule } from '../shared-module';
import { BlogsRoutingModule } from './blogs.routing.module';
import { AddblogComponent } from './addblog/addblog.component';
import { ViewblogComponent } from './viewblog/viewblog.component';


@NgModule({
  declarations: [BlogsComponent ,AddblogComponent , ViewblogComponent],
  providers: [ BlogsService ],
  imports: [
    BlogsRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class BlogsModule { }
