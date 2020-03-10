import { Component, OnInit, ViewChild } from '@angular/core';


import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { RasturantService } from '../services/rasturant.service';
import { MatDialog } from '@angular/material';
import { AddMealComponent } from '../add-meal/add-meal.component';
import { FormControl } from '@angular/forms';
import { element } from 'protractor';
import { CategoryFilterPipe } from '../core/category-filter.pipe';
import { TypeFilterPipe } from '../core/type-filter.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CategoryFilterPipe, TypeFilterPipe]
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

  constructor(private resturantService: RasturantService, public dialog: MatDialog, private categoryFilter: CategoryFilterPipe, private typeFilter: TypeFilterPipe) {
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


  //Search Box Event
  searchProductsEvent() {
    this.filterProduct();
  }

  //on selection change on category dropdown
  onSelectCagetoriesEvent(e) {
    this.filterProduct();
  }

  onSelectTypeEvent(e) {
    this.filterProduct();
  }


  //This will filter product based on search, category and type
  filterProduct() {
    this.products = this.masterProducts;
    if (this.selectedCategories && this.selectedCategories.length !== 0) {
      this.products = this.filterProductsBySelectedCategories(this.searchProductFilter());
    }

    if (this.selectedTypeList && this.selectedTypeList.length !== 0) {
      this.products = this.filterProductsBySelectedTypes(this.searchProductFilter());
    }
    if (this.searchNameModel) {
      this.products = this.searchProductFilter();
    }
  }

  searchProductFilter(){
   return this.products.filter(e => e.name.toUpperCase().includes(this.searchNameModel ? this.searchNameModel.toUpperCase() : ''))
  }

  //Filter Product based on categories
  filterProductsBySelectedCategories(products) {
    let results = [];
    this.selectedCategories.forEach(element => {
      results.push(this.transformProductsByCategory(products, element.id));
    });
    return this.unionProducts(results);
  }

  //find products based on categoryId
  transformProductsByCategory(products, categoryId) {
    return this.categoryFilter.transform(products, categoryId);
  }


  //Filter Product based on types
  filterProductsBySelectedTypes(products) {
    let results = [];
    this.selectedTypeList.forEach(element => {
      results.push(this.transformProductsByType(products, element.id));
    });
    return this.unionProducts(results);
  }

  //find products based on typeId
  transformProductsByType(products, typeId) {
    return this.typeFilter.transform(products, typeId);
  }

  //This will get union of products
  unionProducts(productsListArray) {
    let result = [];
    productsListArray.forEach(elementList => {
      elementList.forEach(element => {
        if (!result.find(x => x.id === element.id)) {
          result.push(element);
        }
      });
    });
    return result;
  }
}
