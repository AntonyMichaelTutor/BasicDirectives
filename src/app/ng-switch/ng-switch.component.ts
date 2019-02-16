import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  constructor() { }
  person:string = "username";
  ngOnInit() {
  }
  check(value:String,ch:number){
    if(ch==1){
      if(value.length<3){
        alert("Invalid UserName");
      }else{
        this.person ="password";
      }
    }else if(ch==2){
      if(value.length<5){
        alert("Invalid user Password");
      }else{
        this.person ="repassword";
      }
    }
  }

}
