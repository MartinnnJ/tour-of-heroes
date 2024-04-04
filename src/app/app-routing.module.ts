import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeroListComponent } from './pages/hero-list/hero-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: 'hero-details/:heroId', component: HeroDetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
