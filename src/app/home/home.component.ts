import { Component, OnInit, ViewChild } from '@angular/core';


import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { RasturantService } from '../services/rasturant.service';
import { MatDialog } from '@angular/material';
import { AddMealComponent } from '../add-meal/add-meal.component';
import { FormControl } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: any[];
  selectedCategories: any[];

  types: any[];
  selectedTypeList: any[] = [];


  masterProducts: any[];
  products: any[]
  loader = new Array(8);



  searchNameModel: string;

  constructor(private resturantService: RasturantService, public dialog: MatDialog) {
  }


  ngOnInit() {
    this.resturantService.getMenu().subscribe(res => {
      this.masterProducts = res;
      this.products = res;
    });
    this.resturantService.getCategories().subscribe(res => {
      this.categories = res;
    });
    this.resturantService.getTypes().subscribe(res => {
      this.types = res;
    });
  }

  addItemDialog(meal): void {
    const dialogRef = this.dialog.open(AddMealComponent, {
      width: '700px',
      data: meal
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  sortBy(prop: string) {
    return this.products.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}
