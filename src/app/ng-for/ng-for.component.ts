import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { 
    document.body.style.backgroundColor = "";
  }
  abt:string;
  flagSearch:Boolean=true;
  flagSearch1:Boolean=true;
  btnFlag:Boolean=false;
  btnFlag1:boolean = true;
  styleValue:string = "btnOkay btnSize";
  styleValue1:string = "btnOkay btnSize";
  students: any[] =   
  [  
    { studentID: 1, studentName: 'Steve', gender: 'Male', age: 35, course: 'MCA' },  
    { studentID: 2, studentName: 'Bobby', gender: 'Male', age: 32, course: 'MBA' },  
    { studentID: 3, studentName: 'Rina', gender: 'Female', age: 45, course: 'B.Tech' },  
    { studentID: 4, studentName: 'Alex', gender: 'Female', age: 24, course: 'M.Tech' },  
  ]; 
  
  color:any[]=
  [
    {colorValue:'Select'},
    {colorValue:'Red'},
    {colorValue:'Yellow'},
    {colorValue:'Green'},
    {colorValue:'Blue'},
    {colorValue:'Orange'},
    {colorValue:'Black'},
    {colorValue:'Violet'},
    {colorValue:'Pink'}
  ]
  color1:any[]=
  [
    {color:"Select",colorValue:'White'},
    {color:"Red",colorValue:'Red'},
    {color:"Yellow",colorValue:'Yellow'},
    {color:"Green",colorValue:'Green'},
    {color:"Blue",colorValue:'Blue'}
  ]
  ngOnInit() {
  }
  bgChange(clr:string){
    console.log(clr);
    if(clr.localeCompare("Select")==0){
      document.body.style.backgroundColor = "white";
    }else{
      document.body.style.backgroundColor = clr;
    }
    
  }
  bgChange1(clr:string){
    document.body.style.backgroundColor = clr;
  }
  searchFunction(name:string){
    if(name.length>0){
      this.flagSearch = false;
    }else{
      this.flagSearch = true;
    }
    console.log(name);
  }
  searchFunction1(name:string){
    if(name.length>0){
      this.flagSearch1 = false;
    }else{
      this.flagSearch1 = true;
    }
    console.log(name);
  }
  aboutYou(abt:string){
    this.abt = abt;
  }
  clrChange(clr:number){
    if(clr%2==0){
      return 'red';
    }else{
      return 'green';
    }
  }
  submit(){
    this.styleValue="btn btnSize";
    this.btnFlag = true;
  }
  submit1(){
    if(this.btnFlag1){
      this.styleValue1="btn btnSize";
      this.btnFlag1 = false;
    }else{
      this.styleValue1="btnOkay btnSize";
      this.btnFlag1 = true;
    }
  }

}
