import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule
  ]
})
export class BooksModule { }
