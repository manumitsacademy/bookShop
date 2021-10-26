import { Component } from '@angular/core';
import { CartService } from './core/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  
export class AppComponent {
  
  newstudent='';
  phonenumber=''
  students=[];
  numOfCartItems: number;
  constructor(public cs:CartService){}
  ngOnInit(){
    this.cs.cartSubject.subscribe((numOfCartItems:number)=>{
      this.numOfCartItems=numOfCartItems;
    })
  }
 
}
