import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable()
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
        `https://api.github.com/search/${this.type}?q=${this.inputValue}+language:${this.language}&sort=stars&order=desc`,
        {
          headers: { Accept: 'application/vnd.github.mercy-preview+json' }
        }
      )
      .then(response => response.data.items)
      .then(data => observer.next(data));
  });

  // async findRepos() {
  //   if (!this.type || !this.inputValue || !this.language) {
  //     throw new Error(`
  //       Incorrect request!
  //       One or more fields is not selected.
  //       `);
  //   }
  //   const response = await axios.get(
  //     `https://api.github.com/search/${this.type}?q=${this.inputValue}+language:${this.language}&sort=stars&order=desc`,
  //     {
  //       headers: { Accept: 'application/vnd.github.mercy-preview+json' }
  //     }
  //   );
  //   console.log(response.data.items);
  //   console.log(`${this.type}, ${this.inputValue}, ${this.language}`);
  //   return response;
  // }

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
      this.findRepos$();
    }
  }
  pullRepos() {
    this.findRepos$.subscribe(data => {
      this.dataService.searchList = data.map(item => {
        return item;
      });
      console.log(this.dataService.searchList);
    });
  }
}
