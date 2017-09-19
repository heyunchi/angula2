import { Component, OnInit } from '@angular/core';
import {flatMap} from "tslint/lib/utils";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  usertelephone:string;
  isLogin:boolean = false;
  constructor() { }

  ngOnInit() {
    if(sessionStorage.getItem('telephone')){
      this.usertelephone = sessionStorage.getItem('telephone');
      this.isLogin = true;
    }else{
      this.usertelephone = '';
      this.isLogin = false;
    }
  }

}
