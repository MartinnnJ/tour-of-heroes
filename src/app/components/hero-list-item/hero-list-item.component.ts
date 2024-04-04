import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import Hero from '../../models/hero.model';

@Component({
  selector: 'app-hero-list-item',
  templateUrl: './hero-list-item.component.html',
  styleUrl: './hero-list-item.component.css'
})
export class HeroListItemComponent {
  @Input() heroId!: string;
  @Input() heroPopularity!: number;
  @Input() heroName!: string;

  @Output() removeHero = new EventEmitter<Hero>();

  constructor(private _heroService: HeroService) {}

  onRemoveHero(id: string) {
    this._heroService.removeHero(id)
      .subscribe(data => {
        this.removeHero.emit(data);
      })
  }
}
