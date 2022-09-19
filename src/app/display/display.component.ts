import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  movieName = "Star Wars : Attack of the Clones";

  allMovieNames = ["Jack Reacher", "John Carter", "The Sound of Music"];

  constructor() { }

  ngOnInit(): void {
  }

}
