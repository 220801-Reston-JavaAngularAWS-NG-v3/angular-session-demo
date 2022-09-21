import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from '../book.model';
import { BooksHttpService } from '../books-http.service';

@Component({
  selector: 'edit-book-http',
  templateUrl: './edit-book-http.component.html',
  styleUrls: ['./edit-book-http.component.css']
})
export class EditBookHttpComponent implements OnInit {

  updatedBook: BookModel = {
    bookId: 0,
    bookTitle: "",
    bookAuthor: "",
    bookGenre: "",
    bookCost: 0,
    bookImageUrl: ""
  }

  constructor(private activatedRoute: ActivatedRoute, 
              private bookHttpService: BooksHttpService,
              private router: Router) { }

  ngOnInit(): void {
    // in order to take out the route parameter from the url we need an API called ActivatedRoute
    // inject ActivatedRoute through the constructor

    let bookId: any = this.activatedRoute.snapshot.paramMap.get("bid");
    console.log(bookId);

    // now contact the bookService and request for the book with this bookId
    // and assign it to updatedBook which is 2 way bound to the form
    this.bookHttpService.getABook(bookId).subscribe((response)=>{
      this.updatedBook = response;
    })
  }

  updateBook(): void{
    // here we have to consume the endpoint to update the book
    this.bookHttpService.updateBook(this.updatedBook).subscribe((response)=>{
      // this reponse is of not much use here
      console.log(response);

    // once  wehave updated we can can now navigate to list-books-hhtp route path
    // we need the Router API for this, so lets inject it
    this.router.navigate(["list-books-http"]);
    });
  }
}
