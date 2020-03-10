import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RasturantService {

  api = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  getRestaurants(): Observable<any>{
   return this.httpClient.get(this.api+"/restaurants");
  }
  getMenu(): Observable<any> {
    return this.httpClient.get(this.api+"/products");
  }
  getMeals(id): Observable<any>{
    return this.httpClient.get(this.api+"/meals/"+id);
  }
  getCategories(): Observable<any> {
    return this.httpClient.get(this.api+"/categories");
  }
  getTypes(): Observable<any> {
    return this.httpClient.get(this.api+"/types");
  }
}
