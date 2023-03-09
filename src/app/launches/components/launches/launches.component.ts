import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ILaunch } from '../../interfaces/launch.interface';
import { LaunchService } from '../../services/launch.service';

@Component({
  selector: 'learn-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
  launches$: Observable<ILaunch[]>;

  constructor(private launchService: LaunchService){}

  ngOnInit(): void {
    this.launches$ = this.launchService.getLaunches();
  }

}
