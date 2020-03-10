import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Meal } from '../interfaces/IMeal';
import { CartService } from '../services/cart.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent implements OnInit {

  itemCount = 1;
  selectedType:any;
  constructor(
    public dialogRef: MatDialogRef<AddMealComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Meal,
    private cartService: CartService,
    private router: Router
  ) {
    if (data.quantity > 0) {
      this.itemCount = data.quantity;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add() {
    this.itemCount = this.itemCount + 1;
  }
  remove() {
    this.itemCount = this.itemCount - 1;
  }
  ngOnInit() {
    this.selectedType = this.data.types[0];
  }

  addToCart() {
    this.data.quantity = this.itemCount;
    this.data.selectedType = this.selectedType;
    this.cartService.addToCart(this.data);
  }

  buyNow(){
    this.data.quantity = this.itemCount;
    this.cartService.addToCart(this.data);
    this.onNoClick();
    this.router.navigate(['/checkout']);
  }


}
