import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../models/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientnService {
  formData: Ingredient;
  readonly rootURL = 'https://localhost:44378/api';
  list: Ingredient[];

  constructor(private http: HttpClient) { }

  postIngredient(formData: Ingredient) {
    return this.http.post(this.rootURL + '/Ingredient/AddIngredients', formData);
  }
  getIngredients() {
    return this.http.get(this.rootURL + '/Ingredient/GetAllIngredients');     
  }
}
