import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { ILaunch } from '../../interfaces/launch.interface';
import { LaunchService } from '../../services/launch.service';

@Component({
  selector: 'learn-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss']
})
export class LaunchDetailComponent implements OnInit {

  launch$: Observable<ILaunch>;
  constructor(private activatedRoute: ActivatedRoute, private launchService: LaunchService){}

  ngOnInit(): void {
    this.launch$ = this.activatedRoute.paramMap
    .pipe(
      map(params => +params.get('flight_number')),
      switchMap(this.launchService.getLaunchById)
    );
  }
}
