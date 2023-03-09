import { Component, OnDestroy, OnInit, Optional, SkipSelf } from '@angular/core'
import { Observable, Subject, Subscription, take, takeUntil } from 'rxjs';
import { ILaunch } from '../launches/interfaces/launch.interface';
import { LaunchService } from '../launches/services/launch.service';

@Component({
  selector: 'learn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  launches: ILaunch[];
  launches$: Observable<ILaunch[]>;
  launchCounterNoAsync: number;
  launchSubscription: Subscription;
  destroy$: Subject<boolean> = new Subject();

  constructor(private launchService: LaunchService) {}

  get launchCounter$() {
    return this.launchService.counter$;
  }

  ngOnInit(): void {
    // this.launchService.getLaunches().subscribe(res => {
    //   this.launches = res;
    // });

    // this.launchSubscription = this.launchService.counter$.subscribe(newCount => {
    //   this.launchCounterNoAsync = newCount;
    //   console.log('newCount:', newCount);
    // })
    this.launchService.counter$
    .pipe(
      // takeUntil(this.destroy$),
      take(1)
    ).subscribe(newCount => {
      this.launchCounterNoAsync = newCount;
      console.log('newCount:', newCount);
    });
    this.launches$ = this.launchService.getLaunches();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.launchSubscription.unsubscribe();
  }
}
