import {Observable, of} from 'rxjs';
import { PreloadingStrategy, Route } from '@angular/router';

export class CustomPreloading implements PreloadingStrategy {
  preload(route: Route, preload): Observable<any> {
    if (route.data && route.data.preload) {
      return preload();
    } else {
      return of(null);
    }
  }
}
