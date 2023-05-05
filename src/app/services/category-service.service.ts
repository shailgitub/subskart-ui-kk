import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

const categoryUrl = 'http://localhost:8082/items';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // createCategory(category: Category) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(private http: HttpClient, private auth: AuthService) {

  }
 
  //private generateTokenUrl = 'http://localhost:8082/authenticate';

  // public generateToken(request: any) {
  //   this.http.post(this.generateTokenUrl, request, { responseType: 'text' as 'json' });
  // }
 
  //new code ng-14
  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(categoryUrl);
  }

  get(id: any): Observable<Category> {
    return this.http.get<Category>(`${categoryUrl}/${id}`);
  }

  createCategory(data: any): Observable<any> {
    return this.http.post(categoryUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${categoryUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${categoryUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(categoryUrl);
  }

  findByTitle(title: any): Observable<Category[]> {
    return this.http.get<Category[]>(`${categoryUrl}?title=${title}`);
  }

  //old code ng-8
  // createCategory(category: Object): Observable<Object> {
  //   return this.http.post(`${this.categoryUrl}`, category);
  // }
  // getCategories() {
  //   // let token = localStorage.getItem("token");
  //   let headers = new HttpHeaders('Content-Type: application/json');
  //   // headers.set("Authorization", 'Bearer ' + token);
  //   return this.http.get(this.categoryUrl, { headers });
  // }
  // getCategories1() {
  //     return this.http.get(this.categoryUrl);
  //   }
  // showAddItemForm(){
  //     return this.http.get(this.categoryUrl);
  //   }
}
