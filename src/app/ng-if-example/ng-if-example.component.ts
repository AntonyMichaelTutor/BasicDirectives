import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.css']
})
export class NgIfExampleComponent implements OnInit {

  mobileCheck:boolean = false;
  rePassFlag:boolean = false;
  submitFlag:boolean = true;

  constructor() { }

  ngOnInit() {
  }
  check(mn:string){
    if(mn.length==10){
      this.mobileCheck = true;
    }else{
      this.mobileCheck = false;
    }
  }
  passwordCheck(pass:string){
    if(pass.length>3){
      this.rePassFlag = true;
    }else{
      this.rePassFlag = false;
    }
  }
  rePasswordCheck(pass1:string,pass2:string){
    if(pass1.localeCompare(pass2)==0){
      this.submitFlag = false;
    }else{
      this.submitFlag = true;
    }
  }

}
