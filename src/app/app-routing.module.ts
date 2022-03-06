import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewUserComponent} from "./new-user/new-user.component";
import {HomeComponent} from "./home/home.component";
import {PostListComponent} from "./post-list/post-list.component";
import {UserListComponent} from "./user-list/user-list.component";
import {AddPostComponent} from "./add-post/add-post.component";
import {SingUpComponent} from "./sing-up/sing-up.component";
import {AuthGuard} from "./services/auth-guard";

const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: 'newUser', component: NewUserComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'post_list', component: PostListComponent, canActivate: [AuthGuard]},
  {path: 'user_list', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'add_post', component: AddPostComponent, canActivate: [AuthGuard]},
  {path: 'sign-up', component: SingUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
