import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() id!: string;
  @Input() name!: string;
}
