import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private auth: AuthService) {

  }


  private itemsUrl = 'http://localhost:8082/items';
  private vendersUrl = 'http://localhost:8082/venders';
  private categoryUrl = 'http://localhost:8082/categories';
  private saveCategoryUrl = 'http://localhost:8082/savecategory';
  private loginUrl = 'http://localhost:8082/login';

  login(login: Object): Observable<Object> {
    return this.http.post(`${this.loginUrl}`, login);
  }
  getCategories() {
    return this.http.get(this.categoryUrl);
  }
  updateCategory(categoryId:any) {
    return this.http.post(`${this.saveCategoryUrl}`, categoryId);
  }

  getItems() {
    return this.http.get(this.itemsUrl);
  }
  getVenders() {
    return this.http.get(this.vendersUrl);
  }
}
