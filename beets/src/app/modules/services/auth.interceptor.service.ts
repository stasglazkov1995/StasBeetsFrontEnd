import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
// import decode from 'jwt-decode';
// import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(public auth : AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // const idToken = localStorage.getItem("id_token");
    // if(idToken){
    //   const cloned = req.clone({
    //     headers: req.headers.set("Authorization" , "Bearer" + idToken)
    //   });
    //   return next.handle(cloned);
    // }
    // else{
    //  return next.handle(req)
    // }
    request = request.clone({
      setHeaders:{
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(request);
  }
  // public getToken():string{
  //   return localStorage.getItem('idtoken');
  // }
  // public isAuthenticated():string{
  //   const token = this.getToken();
  //   // return tokenNotExpired(null,token);
  //   var tokenExpired = this.jwtHelper.isTokenExpired() ;
  //   if(tokenExpired == true){
  //     return token;
  //   }
  // }
}
