import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { ToggleComponent } from './toggle/toggle.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { HeaderComponent } from './header/header.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ToggleComponent,
    CounterComponent,
    ListBooksComponent,
    HeaderComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
