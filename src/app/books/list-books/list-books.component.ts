import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  showAddBookForm: boolean = false;
  allBooks: BookModel[] = [];

  newBook: BookModel = {
    bookId: 0,
    bookTitle: "",
    bookAuthor: "",
    bookGenre: "",
    bookCost: 0,
    bookImageUrl: ""
  }

  // allBooks = [{
  //   bookId: 101,
  //   bookTitle: "Harry Potter and The Deathly Hallows",
  //   bookAuthor: "J.K.Rowling",
  //   bookGenre: "Fiction",
  //   bookCost: 45,
  //   bookImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  // },
  // {
  //   bookId: 102,
  //   bookTitle: "Harry Potter and The Order of Phoenix",
  //   bookAuthor: "J.K.Rowling",
  //   bookGenre: "Fiction",
  //   bookCost: 35,
  //   bookImageUrl: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  // },
  // {
  //   bookId: 103,
  //   bookTitle: "Harry Potter and The Sorcerers Stone",
  //   bookAuthor: "J.K.Rowling",
  //   bookGenre: "Fiction",
  //   bookCost: 55,
  //   bookImageUrl: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  // }];

  // here we are injecting BookService into ListBooksComponent through the constructor
  constructor(private bookService: BooksService, private router: Router) { }

  ngOnInit(): void {
    // here we will fetch all the books from the BooksService
    this.allBooks = this.loadBooks();
  }

  loadBooks(): BookModel[]{
    return this.bookService.getAllBooks();
  }

  deleteBook(bookID: number){
    //console.log(bookID);
    //this.allBooks = this.allBooks.filter((eachBook)=> eachBook.bookId != bookID);

    // here we should call the deleteBook of BookService
    this.bookService.deleteBook(bookID);

    // now get the updated array(array without the deleted book) from the service once again
    this.allBooks = this.loadBooks();
  }

  editBook(bookID: number){
    // later we will fill in the code

    // here we should navigate to EditBookComponent
    // to navigate we need a API called Router
    // so we have to inject Router through the constructor

    this.router.navigate(["edit-book", bookID]);
  }

  addBook(): void{
    console.log(this.newBook);
    this.bookService.addBook(this.newBook);
    this.allBooks = this.loadBooks();
    this.newBook = {
      bookId: 0,
      bookTitle: "",
      bookAuthor: "",
      bookGenre: "",
      bookCost: 0,
      bookImageUrl: ""
    }
    this.showAddBookForm = false;
  }

  toggleBookForm(): void{ 
      this.showAddBookForm = !this.showAddBookForm;
  
  }

  logTittle(bTitle: any){
    console.log(bTitle);
  }
}
