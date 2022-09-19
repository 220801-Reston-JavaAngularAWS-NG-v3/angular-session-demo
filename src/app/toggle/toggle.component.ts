import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  movieName = "";
  show = true;

  constructor() { }

  ngOnInit(): void {
  }

  showName(): void{
    if(this.show){
      this.movieName = "Jack Reacher";
    }else{
      this.movieName = "";
    }
    this.show=!this.show;
  }

}
