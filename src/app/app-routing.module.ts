import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './display/display.component';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { ToggleComponent } from './toggle/toggle.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { ListBooksHttpComponent } from './books-http/list-books-http/list-books-http.component';
import { EditBookHttpComponent } from './books-http/edit-book-http/edit-book-http.component';

const routes: Routes = [
  {
    path: "display", 
    component: DisplayComponent
  },
  {
    path: "counter", 
    component: CounterComponent
  },
  {
    path: "toggle", 
    component: ToggleComponent
  },
  {
    path: "list-books", 
    component: ListBooksComponent
  },
  {
    path: "edit-book/:bid", 
    component: EditBookComponent
  },
  {
    path: "list-books-http", 
    component: ListBooksHttpComponent
  },
  {
    path: "edit-book-http/:bid", 
    component: EditBookHttpComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
