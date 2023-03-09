import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILaunch } from '../../interfaces/launch.interface';
import { LaunchService } from '../../services/launch.service';

@Component({
  selector: 'learn-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

  constructor(private l: LaunchService, private router: Router) {}

  @Input() launch: ILaunch;

  ngOnInit(): void {
    setTimeout(() => {
      this.l.nextCount();
    }, 2000);
  }

  goToDetail() {
    this.router.navigateByUrl(`launches/${this.launch.flight_number}`)
  }
}
