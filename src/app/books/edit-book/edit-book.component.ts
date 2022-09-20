import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  updatedBook: BookModel = {
    bookId: 0,
    bookTitle: "",
    bookAuthor: "",
    bookGenre: "",
    bookCost: 0,
    bookImageUrl: ""
  }

  constructor(private activatedRoute: ActivatedRoute, 
              private bookService: BooksService,
              private router: Router) { }

  ngOnInit(): void {
    // in order to take out the route parameter from the url we need an API called ActivatedRoute
    // inject ActivatedRoute through the constructor

    let bookId: any = this.activatedRoute.snapshot.paramMap.get("bid");
    console.log(bookId);

    // now contact the bookService and request for the book with this bookId
    // and assign it to updatedBook which is 2 way bound to the form
    this.updatedBook = this.bookService.getABook(bookId);
  }

  updateBook(): void{
    // here we should contact  the BookSService and update the book
    this.bookService.updateBook(this.updatedBook);

    // once  wehave updated we can can now navigate to list-books route path
    // we need the Router API for this, so lets inject it

    this.router.navigate(["list-books"]);
  }
}
