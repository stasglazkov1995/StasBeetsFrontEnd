import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) { }
  public getToken():string{
    return localStorage.getItem('idtoken');
  }
  public isAuthenticated():string{
    const token = this.getToken();
    // return tokenNotExpired(null,token);
    var tokenExpired = this.jwtHelper.isTokenExpired() ;
    if(tokenExpired == true){
      return token;
    }
  }
}
