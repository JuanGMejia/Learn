import {NgModule}from '@angular/core';
import { LaunchComponent } from './components/launch/launch.component';

@NgModule({
    declarations: [LaunchComponent],
    exports: [LaunchComponent]
})
export class LaunchModule {};