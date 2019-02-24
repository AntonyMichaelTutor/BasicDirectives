import { Component, OnInit } from '@angular/core';
import { PlayerDetailsService } from '../player-details.service';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit {
  detail=[];
  loginFlag:boolean=false;
  msg:string;
  i:number;
  profile=[];
  constructor() { 
    let pd = new PlayerDetailsService();
    this.detail = pd.details
  }

  ngOnInit() {
  }

  validate(name:string,pasword:string){
    let pd = new PlayerDetailsService();
    this.profile = pd.profile;
    for(this.i=0;this.i<this.profile.length;this.i++){
      if(name.localeCompare(this.profile[this.i].username)==0 && pasword.localeCompare(this.profile[this.i].password)==0){
          this.loginFlag = true;
          break;
      }
    }
    if(this.loginFlag){
      this.msg = "LoggedIn Successfully";
    }else{
      this.msg = "Loggin Failed";
    }
  }

}
