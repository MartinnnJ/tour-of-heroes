import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import Hero from '../../models/hero.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  popularHeroes: Hero[] = [];

  constructor(private _heroService: HeroService) {}

  ngOnInit(): void {
    this._heroService.getHeroes()
      .pipe(map(heroesArr => {
        return heroesArr
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 4)
      }))
      .subscribe(data => this.popularHeroes = data);
  }
}
