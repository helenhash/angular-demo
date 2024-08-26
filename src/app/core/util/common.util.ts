import { ActivatedRouteSnapshot, Data } from "@angular/router";

export default class CommonUtil {

  static getRouteData(snapshot: ActivatedRouteSnapshot, data: Data = {}): Data {
    if (snapshot != null) {
      if (snapshot.data != null)
        data = Object.assign(data, snapshot.data);
      const children: ActivatedRouteSnapshot[] = snapshot.children;
      for (const child of children)
        CommonUtil.getRouteData(child, data);
    }
    return data;
  }

}
