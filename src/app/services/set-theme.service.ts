import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetThemeService {
  themeTile = false;

  constructor() {}

  toggleTheme() {
    // (<HTMLButtonElement>(
    //   document.querySelector('.result-list-control__item_active')
    // )).disabled = true;

    this.themeTile = !this.themeTile;
    console.log(this.themeTile);
  }
}
