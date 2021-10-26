import { Component, OnInit } from '@angular/core';
import { CartService } from '../core/cart.service';
import { BookService } from './book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(public bS:BookService,public cS:CartService) { }
  books:any;
  ngOnInit(): void {
    this.bS.getAllBooks().subscribe((res)=>{
      console.log("books response::",res)
      this.books=res;
    })
  }
  addToCart(book){
    this.cS.addProdToCart(book)
  }
}
