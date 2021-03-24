import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Blog } from './model/blog.model';


@Injectable({ providedIn: 'root' })
export class BlogsService {


    public getBlogsList() {
        const blogs = localStorage.getItem("blogs") ? JSON.parse(localStorage.getItem("blogs")) :[];
        return blogs;
    }

    public getBlogsById(id) {
        const blogs = localStorage.getItem("blogs") ? JSON.parse(localStorage.getItem("blogs")) :[];
        return blogs.find(b => b.Id == id);
    }

    public addnewBlog(blog) {
        let blogs: Array<Blog> = []
        blogs  = localStorage.getItem("blogs") ? JSON.parse(localStorage.getItem("blogs")) :[];
        blogs.push(blog);
        localStorage.removeItem("blogs");
        localStorage.setItem("blogs", JSON.stringify(blogs));
    }

    public updateBlog(updatedBlog) {
        const blogs = localStorage.getItem("blogs") ? JSON.parse(localStorage.getItem("blogs")) :[];
        const blog =  blogs.find(b => b.Id == updatedBlog.Id);
        blog.Content = updatedBlog.Content;
        blog.LastModifiedDate = updatedBlog.LastModifiedDate;
        localStorage.removeItem("blogs");
        localStorage.setItem("blogs", JSON.stringify(blogs));
    }

    public deleteblog(id) {
        let blogs: Array<Blog> = []
        blogs = localStorage.getItem("blogs") ? JSON.parse(localStorage.getItem("blogs")) :[];
        blogs = blogs.filter(b=>b.Id !=id);
        localStorage.removeItem("blogs");
        localStorage.setItem("blogs", JSON.stringify(blogs));
    }

}