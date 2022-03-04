import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewUserComponent} from "./new-user/new-user.component";
import {HomeComponent} from "./home/home.component";
import {PostListComponent} from "./post-list/post-list.component";
import {UserListComponent} from "./user-list/user-list.component";

const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch: "full"},
  {path: 'newUser', component: NewUserComponent},
  {path: 'home', component: HomeComponent},
  {path: 'post_list', component: PostListComponent},
  {path: 'user_list', component: UserListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
