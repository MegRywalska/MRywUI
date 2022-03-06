import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewUserComponent} from './new-user/new-user.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {PostListComponent} from './post-list/post-list.component';
import {UserListComponent} from './user-list/user-list.component';
import {AddPostComponent} from './add-post/add-post.component';
import {SingUpComponent} from './sing-up/sing-up.component';
import {AuthService} from "./services/auth-service";
import {AuthInterceptor} from "./services/auth-interceptor";
import {AuthGuard} from "./services/auth-guard";


@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    HomeComponent,
    PostComponent,
    PostListComponent,
    UserListComponent,
    AddPostComponent,
    SingUpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
