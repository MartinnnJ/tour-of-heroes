import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeroComponent } from './components/hero/hero.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { HeroListItemComponent } from './components/hero-list-item/hero-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailsComponent,
    NotFoundComponent,
    HeroComponent,
    HeroListComponent,
    HeroListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TabViewModule,
    ButtonModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
