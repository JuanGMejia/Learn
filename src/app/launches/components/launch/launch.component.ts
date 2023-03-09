import { Component, Input, OnInit } from '@angular/core';
import { ILaunch } from '../../interfaces/launch.interface';
import { LaunchService } from '../../services/launch.service';

@Component({
  selector: 'learn-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

  constructor(private l: LaunchService) {}

  @Input() launch: ILaunch;

  ngOnInit(): void {
    setTimeout(() => {
      this.l.nextCount();
    }, 2000);
  }
}
