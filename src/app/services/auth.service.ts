import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import { User } from '../models/user';
import { UserResponse } from '../models/user-response';
import { ApiConstants } from '../config/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    console.log(localStorage.getItem('currentUser'));
    const item = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject(item ? JSON.parse(item) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const formData: FormData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return this.http.get<UserResponse>(ApiConstants.LOGIN_API) //Todo: this fake api, this should be post method.
      .pipe(map(userResponse => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(userResponse.data));
        this.currentUserSubject.next(userResponse.data);
        return userResponse.data;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
  }

}
