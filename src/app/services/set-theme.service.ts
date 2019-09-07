import { Injectable } from '@angular/core';

@Injectable()
export class SetThemeService {
  themeTile = false;

  constructor() {}

  toggleTheme() {
    this.themeTile = !this.themeTile;
    console.log(this.themeTile);
  }
}
