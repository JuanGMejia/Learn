import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { LowerPipe } from './pipes/lower.pipe';
import { LaunchModule } from './launches/launch.module';
import { LaunchService } from './launches/services/launch.service';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    HomeComponent,
    CharactersComponent,
    LowerPipe
    // componentes, pipes, directivas
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    LaunchModule
    // modules
  ],
  exports:[],
  providers: [
    // servicios, guards, interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

