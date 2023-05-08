import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  cachedRequests: Array<HttpRequest<any>> = [];
  public collectFailedRequest(request: HttpRequest<any>): void {
      this.cachedRequests.push(request);
    }
  public retryFailedRequests(): void {
      // retry the requests. this method can
      // be called after the token is refreshed
    }
  constructor(private router: Router, private http: HttpClient) { }
  private loginUrl = 'http://localhost:8082/login';
  

  //call token api from server
  generateToken(loginObj: any) {
    return this.http.post(`${this.loginUrl}`, loginObj);
  }
  loginUser(token: string) {
    localStorage.setItem("token", token);
    console.log("loginUser :" ,token);
    return true;
  }
  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    localStorage.removeItem("token");
    return true;
  }

  getToken() {
    return localStorage.getItem("token");
  }




    login(username: String, password: String) {
      if (username === 'kiran' && password === 'kiran') {
        return 200;
      }else{
        return 403;
      }
    }
}
