import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator for epam angular';

  public num1:number;
  public num2:number;
  public num3:number;

  plus(){
    this.num3=this.num1+this.num2;
  }
  minus(){
    this.num3=this.num1-this.num2;
  }

  umnoj(){
    this.num3=this.num1*this.num2
  }

  delen(){
    this.num3=this.num1/this.num2
  }

}
