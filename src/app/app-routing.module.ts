import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { AppComponent } from './app.component';
import { NgIfElseComponent } from './ng-if-else/ng-if-else.component';
import { NgIfThenElseComponent } from './ng-if-then-else/ng-if-then-else.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';

const routes: Routes = [
                          {path:"DataBinding",component:DataBindingComponent},
                          {path:"NgIf",component:NgIfExampleComponent},
                          {path:"NgIfElse",component:NgIfElseComponent},
                          {path:"NgIfThenElse",component:NgIfThenElseComponent},
                          {path:"Switch",component:NgSwitchComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
