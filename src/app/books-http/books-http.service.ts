import { Injectable } from '@angular/core';
import { BookModel } from './book.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksHttpService {

  baseUrl: string = "http://localhost:5555/api/books";

  constructor(private httpClient: HttpClient) { }

  // R - Read
  getAllBooks(): Observable<BookModel[]>{
    // here consume the getAllBooks endpoint of the back end application
    // the end point is - http://localhost:6666/api/books
    // the get method of httpClient returns an observable
     return this.httpClient.get<BookModel[]>(this.baseUrl);
  }

  // C - Create
  addBook(newBook: BookModel): Observable<BookModel>{
    // the end point is - http://localhost:6666/api/books
    // newBook is to be sent in the request body
    return this.httpClient.post<BookModel>(this.baseUrl, newBook);
  }

  // U - Update
  updateBook(updateBook: BookModel): Observable<BookModel>{
    // the end point is - http://localhost:6666/api/books
    // updateBook is to be sent in the request body
    return this.httpClient.put<BookModel>(this.baseUrl, updateBook);
  }

  // D - Delete
  deleteBook(bookID: number):Observable<void> {
  // the endpoint is - http://localhost:5555/api/books/14
    return this.httpClient.delete<void>(this.baseUrl + "/" + bookID);
  }

  getABook(bookId: number): Observable<BookModel>{
   // the endpoint is - http://localhost:5555/api/books/14
    return this.httpClient.get<BookModel>(this.baseUrl + "/" + bookId);
  }
}
