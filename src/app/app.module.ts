import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LowerPipe } from './pipes/lower.pipe';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'launches',
    loadChildren: () => import('./launches/launch.module').then(m => m.LaunchModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HomeComponent,
    LowerPipe
    // componentes, pipes, directivas
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    // modules
  ],
  exports:[],
  providers: [
    // servicios, guards, interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

