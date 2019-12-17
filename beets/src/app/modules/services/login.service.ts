import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user-registration.model';
import { map } from 'rxjs/internal/operators/map';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  // token: string;
  // header: any;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    //
    // const headerSettings: { [name: string]: string | string[]; } = {};
    // this.header = new HttpHeaders(headerSettings);
  }

  public Login(formData: User) {
    debugger;
    return this.http.post<any>(`${environment.beetsService}/Account/Login`, formData)
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('curentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }
  public Logout() {
    localStorage.removeItem('CurentUser');
    this.currentUserSubject.next(null);
  }
}

