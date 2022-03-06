import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export type UserMrywRequstDTO = {
  email: string
  accountName: string
  password: string
  accountURL: string

}
const  EMPTY_CREATE_USERMRYW_DTO = {
  email: '',
  accountName:'',
  password: '',
  accountURL: ''
}
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userMrywDTO: UserMrywRequstDTO;
  notification: any;


  constructor(private http: HttpClient) {
    this.userMrywDTO = Object.assign({}, EMPTY_CREATE_USERMRYW_DTO);
    this.notification = null;
  }

  ngOnInit(): void {
  }

  addPost(): void{
    // http://localhost:9000/post PUT -> dodaj posta

    this.http.put('http://localhost:9000/post', this.userMrywDTO).subscribe((data) => {
      this.clearForm();

      this.notification = 'Account has been registered!';

      setTimeout(()=> {
        this.clearNotification();
      }, 3000)

    });

  }

  clearForm(): void{
    this.userMrywDTO = Object.assign({},EMPTY_CREATE_USERMRYW_DTO);
  }

  clearNotification(): void{
    this.notification = null;
  }

}
