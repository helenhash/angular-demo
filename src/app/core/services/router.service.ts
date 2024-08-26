import { Injectable } from "@angular/core";
import { ActivatedRoute, Data, NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject, filter, map, Observable } from "rxjs";
import CommonUtil from "../util/common.util";

@Injectable({
  providedIn: 'root',
})
export class RouterService {

  private _data: BehaviorSubject<Data> = new BehaviorSubject<any | Data> (null);

  constructor(private router: Router, private route: ActivatedRoute){
    this.router.events.pipe (
      filter(event => event instanceof NavigationEnd),
      map(() => CommonUtil.getRouteData(this.route.snapshot))
    )
    .subscribe(value => this._data.next(value))
  }

  get data(): Observable<Data> {
    return this._data.pipe (
      filter(value => value != null)
    );
  }
}
