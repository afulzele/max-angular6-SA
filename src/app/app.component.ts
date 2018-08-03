import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAYniGaqHFYlmb5CgBdEiWTiizDAzwgKyU",
      authDomain: "ng-recipe-book-22a6f.firebaseapp.com",
    });
  }

}
