import { Component, OnInit } from '@angular/core';
import { LaunchService } from '../launches/services/launch.service';

export interface ILink {name: string, route: string, isActive: boolean};

@Component({
  selector: 'learn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  links: ILink[] = [];

  constructor(private l: LaunchService) {}

  ngOnInit(): void {
    this.title = 'My AMAZING App';
    // this.links = [{name: 'Jose', route:'/', isActive: true}];
  }

  onClick() {
    this.l.nextCount();
    ////console.log('Clicked')
  }

  changeLinks() {
    // this.links = [{name: 'Juan', route:'/', isActive: true}];
    this.links[0].name = 'Juan';
  }

}
