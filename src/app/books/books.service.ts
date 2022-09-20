import { Injectable } from '@angular/core';
import { BookModel } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // data store
  allBooks: BookModel[] = [{
    bookId: 101,
    bookTitle: "Harry Potter and The Deathly Hallows",
    bookAuthor: "J.K.Rowling",
    bookGenre: "Fiction",
    bookCost: 45,
    bookImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    bookId: 102,
    bookTitle: "Harry Potter and The Order of Phoenix",
    bookAuthor: "J.K.Rowling",
    bookGenre: "Fiction",
    bookCost: 35,
    bookImageUrl: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  },
  {
    bookId: 103,
    bookTitle: "Harry Potter and The Sorcerers Stone",
    bookAuthor: "J.K.Rowling",
    bookGenre: "Fiction",
    bookCost: 55,
    bookImageUrl: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  }];

  constructor() { }

  // R - Read
  getAllBooks():BookModel[]{
    return this.allBooks;
  }

  // C - Create
  addBook(newBook: BookModel): BookModel{
    // own logic to generate the book id for the new book
    let newBookId: number = this.allBooks[this.allBooks.length-1].bookId + 1;
    // assign the generated book id to the new book that we want to insert in to the array
    newBook.bookId = newBookId;
    // now the newBook object is ready to be pushed to the array allBooks
    this.allBooks.push(newBook);
    //return the newBook object with bookId
    return newBook;
  }

  // U - Update
  updateBook(updateBook: BookModel): BookModel{
    for(let i=0;i<this.allBooks.length;i++){
      if(this.allBooks[i].bookId == updateBook.bookId){
        this.allBooks[i] = updateBook;
      }
    }
    return updateBook;
  }

  // D - Delete
  deleteBook(bookID: number): void{
    this.allBooks = this.allBooks.filter((eachBook)=> eachBook.bookId != bookID);
  }
}
