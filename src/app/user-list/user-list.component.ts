import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostDTOModel} from "../post-list/post-list.component";

export type UserMrywDTOModel = {
  id: number;
  email: string;
  accountName: string;
  password: string;
  accountURL: string;
  creationDate: string;
  statusAccount: string;
//  avatar: blob ??? co to ma być ?
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersList: UserMrywDTOModel[];

  constructor(private http: HttpClient) {
    this.usersList =[];
  }

  ngOnInit(): void {
    this.refreshUsersList();
  }

  private refreshUsersList() {

    // http://localhost:9000/user Get -> wszyscy urzytkownicy (docelowo wszyscy obserwowani użyszkodnicy

    this.http.get('http://localhost:9000/user').subscribe((data) => {
      let ListOfUsers = data as UserMrywDTOModel[];

      this.usersList = ListOfUsers;
    })
  }
}















