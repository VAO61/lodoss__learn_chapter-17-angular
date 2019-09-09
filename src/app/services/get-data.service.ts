import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';

import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private dataService: DataService) {}

  type = '';
  language = '';
  inputValue = '';

  types = [{ value: 'Repositories' }];
  languages = [
    { value: 'Javascript' },
    { value: 'CSS' },
    { value: 'HTML' },
    { value: 'PHP' },
    { value: 'Ruby' },
    { value: 'C++' },
    { value: 'Python' },
    { value: 'C#' },
    { value: 'Java' },
    { value: 'Go' },
    { value: 'Haskel' }
  ];

  findRepos$ = Observable.create(observer => {
    if (!this.type || !this.inputValue || !this.language) {
      throw new Error(`
        Incorrect request!
        One or more fields is not selected.
        `);
    }

    axios
      .get(
        `https://api.github.com/search/${this.type}?q=${this.inputValue}+language:${this.language}&sort=stars&order=desc&per_page=6`,
        {
          headers: { Accept: 'application/vnd.github.mercy-preview+json' }
        }
      )
      .then(response => response.data.items)
      .then(data => observer.next(data));
  });

  typeValue(type) {
    this.type = type.toLowerCase();
  }

  languageValue(language) {
    this.language = language;
  }

  isDisableSearch = () =>
    this.type === '' || this.language === '' || this.inputValue === '';

  inputChanged(event) {
    this.inputValue = event.target.value;

    if (event.which === 13 && !this.isDisableSearch()) {
      this.pullRepos();
    }
  }

  pullRepos() {
    this.findRepos$.subscribe(data => {
      this.dataService.searchList = data.map(item => {
        return item;
      });
      // console.log(this.dataService.searchList);
    });
  }
}
