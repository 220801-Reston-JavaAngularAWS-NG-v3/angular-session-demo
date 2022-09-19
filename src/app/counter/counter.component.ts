import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCounter(): void{
    this.counter++;
  }

  decrementCounter(): void{
    this.counter--;
  }
}
