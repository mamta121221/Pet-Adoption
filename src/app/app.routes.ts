import { Route } from '@angular/router';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Route[] = [ 
{
  path: '',
  redirectTo:'home',
  pathMatch: 'full'
  
  },
  {
    path: 'home',
    component:HomeComponent
  },
{
  path: 'petDetails',
  component:PetDetailsComponent
},
{
  path: '**',
  component : PageNotFoundComponent
  
}];