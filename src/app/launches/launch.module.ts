import {NgModule}from '@angular/core';
import { LaunchComponent } from './components/launch/launch.component';
import { LaunchDetailComponent } from './components/launch-detail/launch-detail.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { Route, RouterModule } from '@angular/router';
import { LowerPipe } from '../pipes/lower.pipe';
import { CommonModule } from '@angular/common';

const routes: Route[] = [
    {
        path: '',
        component: LaunchesComponent
    },
    {
        path: ':flight_number',
        component: LaunchDetailComponent
    }
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        LaunchComponent,
        LaunchDetailComponent,
        LaunchesComponent,
        LowerPipe
    ]
})
export class LaunchModule {};