import { User } from './_interfaces/user.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isCreate: boolean;
 

  public users: User[] = [];
  public response :{dbpath:''};


  constructor(private http: HttpClient){}

  ngOnInit(){
    this.isCreate = true;
  }

  public onCreate = () => {

    this.http.get('https://localhost:5001/api/users')
    .subscribe(res => {
      this.users = res as User[];
      this.isCreate = false;
    });

   /* this.http.post('https://localhost:5001/api/users', this.user)
    .subscribe(res => {
      this.getUsers();
      this.isCreate = false;
    });*/
  }

  /*private getUsers = () => {
    this.http.get('https://localhost:5001/api/users')
    .subscribe(res => {
      this.users = res as User[];
    });
  }*/

  public returnToCreate = () => {
    this.isCreate = true;
  
  }

  public uploadFinished =(event)=>{
    this.response=event;
  }
}
