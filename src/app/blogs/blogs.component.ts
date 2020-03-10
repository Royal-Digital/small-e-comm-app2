import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stars = 0;
  rating = 0;
  fillStars(starNumber) {
    this.stars = starNumber;
  }
  removeFillStars() {
    this.stars = this.rating;
  }
  addRating(star) {
    this.rating = star;
  }

}
