// import { DataService } from './data.service';
// import { Injectable } from '@angular/core';
import axios from 'axios';
// import { Observable } from 'rxjs';

// @Injectable()
export class DataService {
  items = [
    {
      value: 1,
      label: 'test1'
    },
    {
      value: 2,
      label: 'test2'
    }
  ];
  // language: '';
  // languages = [{ name: 'aaa' }, { name: 'bbb' }, { name: 'ccc' }];

  // constructor() {}
  // async findRepos(language) {
  //   const response = await axios.get(
  //     `https://api.github.com/search/repositories?q=aaa+language:${language}&sort=stars&order=desc`,
  //     {
  //       headers: { Accept: 'application/vnd.github.mercy-preview+json' }
  //     }
  //   );
  //   console.log(response.data.items);
  //   // console.log(this.language);
  //   return response;
  // }
  // findRepos(language);
  // async findRepos(type, searchValue, lang) {
  //   const response = await axios.get(
  //     `https://api.github.com/search/${type.toLowerCase()}?q=${searchValue}+language:${lang}&sort=stars&order=desc`,
  //     {
  //       headers: { Accept: 'application/vnd.github.mercy-preview+json' }
  //     }
  //   );
  //   return response;
  // }

  // if (!type || !searchValue || !lang) {
  //   throw new Error('Some Error text');
  // }
}
// export default getData;
