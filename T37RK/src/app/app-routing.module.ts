import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'personaje',component:PersonajeComponent},
{path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
