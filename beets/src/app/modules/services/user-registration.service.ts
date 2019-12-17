import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user-registration.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserRegistrationService {

  formData:User;
  // readonly rootURL = 'https://localhost:44378/api';
  // list:User[];

  constructor(private http:HttpClient) { }

  postUserDetail(formData:User){
    return this.http.post(`${environment.beetsService}/Account/Registration` , formData);
  }
}
