import { Component, OnInit } from '@angular/core';
import { first, from, fromEvent, last, observable, Observable } from 'rxjs';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // EX 1 //
  title = 'rxjs-sandbox';
  clickObservable: Observable<Event> = fromEvent(document, 'click');
  clickTimes: number = 0;

  // EX 2 //
  users: Observable<User> = from([{
     firstName: 'yinon', 
     lastName: 'perets',
      age: 27,
      phone: '050-0000000', 
      email: 'yinongmail.com'
    },{
       firstName: 'david',
       lastName: 'persts', 
       age: 32, phone: '050-0000001', 
       email: 'david@gmail.com'
      },{
        firstName: 'moshe', 
        lastName: 'perets',
        age: 36,
       phone: '050-0000002', 
       email: 'moshe@gmail.com'
        }
  ]);

  user: User | void = undefined;
  

  ngOnInit(){
    // EX 1 //
    this.subscribeObservable();

    // EX 2 //
    this.getUser();
  }
  // EX 1 //
     subscribeObservable() {
      this.clickObservable.subscribe(()=>{
      this.clickTimes++;
      console.log(`You Clicked On Screen ${this.clickTimes} Times!`);
    })
  }

  // EX 2
   getUser(){
    this.users.pipe(first()).subscribe((data) => {this.user = data;})
  }

}
