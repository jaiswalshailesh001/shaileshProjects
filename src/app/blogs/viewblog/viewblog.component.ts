import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Blog } from '../model/blog.model';
import { BlogsService } from '../blogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent implements OnInit , AfterViewInit{

  blogs: Array<Blog> = [];
  displayedColumns: string[] = ['id', 'content','date' ,'action'];
  dataSource: MatTableDataSource<Blog> = new MatTableDataSource();
  defaultPageSize = 10;
  pagelength = 1;
  blog :Blog;
  Id: number;
  Content: string;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(private blogService :BlogsService ,public dialog: MatDialog ,private router :Router) {
    this.getPreSavedBlogs();
   }

  ngOnInit() {
    // this.getPreSavedBlogs();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getPreSavedBlogs() {
    this.blogs = this.blogService.getBlogsList();
    this.dataSource= new MatTableDataSource(this.blogs);
    this.dataSource.paginator = this.paginator;
    setTimeout(() => {
      this.dataSource.sort = this.sort; 
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(id){
    this.router.navigate(["/blogs/edit/",id])
  }

  deleteBlog(id){
    this.blogService.deleteblog(id);
    this.getPreSavedBlogs();
  }
}