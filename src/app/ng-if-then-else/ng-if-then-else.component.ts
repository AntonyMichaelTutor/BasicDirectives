import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-then-else',
  templateUrl: './ng-if-then-else.component.html',
  styleUrls: ['./ng-if-then-else.component.css']
})
export class NgIfThenElseComponent implements OnInit {

  constructor() { }
  passFlag:boolean = true;
  ngOnInit() {
  }
  checkPass(pass:string){
      if(pass.length>5){
        this.passFlag = false;
      }else{
        alert("Invalid Password");
      }
  }

}
