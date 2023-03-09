import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ILink } from '../header/header.component';

@Component({
  selector: 'learn-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit, OnChanges, DoCheck {
  @Input() navLinks: ILink[] = [];
  @Input() active: boolean;
  @Output() onClickNavLink = new EventEmitter();

  constructor(private cd: ChangeDetectorRef) {
    //console.log('Constructor')
  }

  ngOnInit(): void {
    //console.log('OnInit')
    if (!this.navLinks.length) {
      this.navLinks = [
        {
          name: 'Home',
          route: '/',
          isActive: true
        },
        {
          name: 'Characters',
          route: '/characters',
          isActive: true
        },
        {
          name: 'Restaurant',
          route: '/restaurant',
          isActive: false
        }
      ];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('OnChanges')
    //console.log(changes)
  }

  ngDoCheck(): void {
    //console.log('DoCheck')
    this.cd.markForCheck();
  }
}
