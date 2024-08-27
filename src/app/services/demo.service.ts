import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstants } from '../config/app.constants';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor(private http: HttpClient) {}

  // The Promise object represents
  // the eventual completion (or failure) of an asynchronous operation, and its resulting value.
  getPromise() {
    let promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('I promise to return this after 2 second!');
        // reject('Error');
      }, 2000);
    });

    return promise;
  }

  callPromise() {
    this.getPromise()
    .then(function(value) {
      console.log(value);
    })
    .catch(function(error) {
      console.log(error);
    });
    console.log('I will not wait until promise is resolved');
  }

  async callPromiseWithAwait(){
    try {
      const test = await this.getPromise();
      console.log(test);
      console.log('Wait until promise call finish/resolve.');
    } catch(error) {
      console.log(error);
    }
  }

  fetchDataAsPromise() {
    return this.http.get(ApiConstants.CUSTOMER_API).toPromise();
  }

  //RXJs
  firstRxJs() {
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
    console.log('just before subscribe');
    observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');
  }

  // compare to function
  // function foo() {
  //   console.log('Hello');
  //   return 42;
  //   return 100; // dead code. will never happen
  // }
  demoRxJsReturnMoreValue(){
    const foo = new Observable(subscriber => {
      console.log('Hello');
      subscriber.next(42);
      subscriber.next(100); // "return" another value
      subscriber.next(200); // "return" yet another
    });
    console.log('before');
    foo.subscribe(x => {
      console.log(x);
    });
    console.log('after');
  }

  // "return" values asynchronously
  demoAsynchronously() {
    const foo = new Observable(subscriber => {
      console.log('Hello');
      subscriber.next(42);
      subscriber.next(100);
      subscriber.next(200);
      setTimeout(() => {
        subscriber.next(300); // happens asynchronously
      }, 1000);
    });

    console.log('before');
    foo.subscribe(x => {
      console.log(x);
    });
    console.log('after');
  }

}
