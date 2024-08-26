import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { ApiConstants } from '../config/app.constants';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}


  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(ApiConstants.CUSTOMER_API);
  }

  get(id: any): Observable<Customer> {
    return this.http.get<Customer>(`${ApiConstants.CUSTOMER_API}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(ApiConstants.CUSTOMER_API, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${ApiConstants.CUSTOMER_API}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${ApiConstants.CUSTOMER_API}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(ApiConstants.CUSTOMER_API);
  }

  findByName(fname: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${ApiConstants.CUSTOMER_API}?firstName=${fname}`);
  }
}
