import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import Hero from '../../models/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private _heroService: HeroService) {}

  ngOnInit(): void {
    this._heroService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
      })
  }

  onFormSubmit(
    event: SubmitEvent,
    nameInput: HTMLInputElement,
    popularityInput: HTMLInputElement
  ) {
    event.preventDefault();
    const nameInputValue = nameInput.value;
    let popularityInputValue = +popularityInput.value;

    if (
      nameInputValue.length > 2 &&
      nameInputValue.length < 20
    ) {
      if (popularityInputValue < 0) {
        popularityInputValue = 0;
      }
      if (popularityInputValue > 9) {
        popularityInputValue = 9;
      }
      this._heroService.createHero(nameInputValue, popularityInputValue)
        .subscribe(data => {
          this.heroes.push(data);
          nameInput.value = '';
          popularityInput.value = '0';
        })
    }
  }

  onRemoveHero(data: Hero) {
    const index = this.heroes.findIndex(hero => hero.id === data.id);
    this.heroes.splice(index, 1);
  }

}
