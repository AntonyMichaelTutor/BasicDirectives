import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  colorValue:string="red";
  buttonFlag:boolean=true;
  mobileFlag:boolean=true;
  goalText: string = 'My first life goal'; 
  changeColor(clrValue:string){
    this.colorValue = clrValue;
  }
  check(valueA:number){
    if(valueA>0){
       this.buttonFlag = false; 
    }else{
       this.buttonFlag = true;
    }
  }
  mobileCheck(valueA:string){
    if(valueA.length==10){
       this.mobileFlag = false; 
    }else{
       this.mobileFlag = true;
    }
  }

}
