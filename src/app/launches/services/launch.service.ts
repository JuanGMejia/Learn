import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ILaunch } from '../interfaces/launch.interface';

// Hierarchy dependency injection
// Difference tree-shakeable declaration vs providers
@Injectable({
  providedIn: 'root'
})
export class LaunchService {
  private counter = 0;
  counter$: Subject<number> = new Subject();
  constructor(private http: HttpClient) {}

  getLaunches() {
    return this.http.get<ILaunch[]>('https://api.spacexdata.com/v3/launches');
  }

  nextCount() {
    this.counter++;
    this.counter$.next(this.counter);
  }
}
