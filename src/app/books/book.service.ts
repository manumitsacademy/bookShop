import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl="http://localhost:3000/books"
  constructor(public http:HttpClient) { }
  getAllBooks(){
    return this.http.get(`${this.baseUrl}`)
  }
}
