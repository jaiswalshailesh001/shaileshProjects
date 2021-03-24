import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { AddblogComponent } from './addblog/addblog.component';
import { ViewblogComponent } from './viewblog/viewblog.component';
import { AuthGuard } from '../services/auth.gaurd';

const routes: Routes = [
    {
        path: '', component: BlogsComponent,
        children: [{ path: 'add', component: AddblogComponent },
        { path: 'edit/:id', component: AddblogComponent },
        { path: 'view', component: ViewblogComponent },
        { path: '', redirectTo: 'view' }

        ],canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogsRoutingModule {

}