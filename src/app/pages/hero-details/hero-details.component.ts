import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css'
})
export class HeroDetailsComponent implements OnInit, OnDestroy {
  heroId!: string;
  heroName!: string;

  justUpdated = false;
  timerId: any;

  constructor(
    private _heroService: HeroService,
    private _route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.heroId = this._route.snapshot.params['heroId'];
    this._heroService.getHeroDetails(this.heroId)
      .subscribe(data => {
        this.heroName = data.name;
      });
  }

  ngOnDestroy(): void {
    this.justUpdated = false;
    clearTimeout(this.timerId);
  }

  onSave(id: string) {
    if (this.heroName.length > 2 && this.heroName.length < 20) {
      this._heroService.updateHero(id, this.heroName)
        .subscribe(data => {
          if (data.id) {
            this.justUpdated = true;

            this.timerId = setTimeout(() => {
              this.justUpdated = false;
              clearTimeout(this.timerId);
            }, 4000);
          }
        });
    }
  }

  onNavigateBack() {
    this._location.back();
  }
}
