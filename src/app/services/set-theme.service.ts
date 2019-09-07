import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetThemeService {
  themeTile = false;

  constructor() {}

  toggleTheme() {
    this.themeTile = !this.themeTile;
    console.log(this.themeTile);
  }
}
