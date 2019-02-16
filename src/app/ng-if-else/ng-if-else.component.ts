import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  templateUrl: './ng-if-else.component.html',
  styleUrls: ['./ng-if-else.component.css']
})
export class NgIfElseComponent implements OnInit {

  constructor() { }
  passFlag:boolean=true;

  ngOnInit() {
  }
  checkPass(pass:string){
    if(pass.length>3){
      this.passFlag = false;
    }else{
      this.passFlag = true;
    }
  }

}
