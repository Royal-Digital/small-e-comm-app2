import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  loader = new Array(2);
  orders = new Array();
  starBoxList:ratingStar[] = [];
  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(res => {
      this.orders = res;
      this.initilizeStarBox();
    });
  }
  
  initilizeStarBox (){
    for (let index = 0; index < this.orders.length; index++) {
      const temp: ratingStar = {
        stars: 0,
        rating: 0
      };
      this.starBoxList.push(temp);      
    }
  
  }
  fillStars(index, starNumber) {
    this.starBoxList[index].stars = starNumber;
  }
  removeFillStars(index) {
    this.starBoxList[index].stars= this.starBoxList[index].rating;
  }
  addRating(index, star) {
    this.starBoxList[index].rating = star;
  }

}

export interface ratingStar {
  stars: number;
  rating: number;
}
