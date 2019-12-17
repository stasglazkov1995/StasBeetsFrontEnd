import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  formData: Dish;
  readonly rootURL = 'https://localhost:44378/api';
  list: Dish[];

  constructor(private http:HttpClient) { }

  postDish(formData: Dish) {
    return this.http.post(this.rootURL + '/Dish/AddDish', formData);
  }
  getDish() {
    return this.http.get(this.rootURL + '/Ingredient/GetAllIngredients');     
  }
}
