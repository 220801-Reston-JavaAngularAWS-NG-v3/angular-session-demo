import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './display/display.component';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { ToggleComponent } from './toggle/toggle.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
