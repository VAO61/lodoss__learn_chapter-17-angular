// import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class getData {
  language: '';
  languages = [{ name: 'aaa' }, { name: 'bbb' }, { name: 'ccc' }];

  // constructor(private )
  // const getData$ = Observable.create(observer => (
  //   function(type, searchValue, lang) {

  //     if (!type || !searchValue || !lang) {
  //       throw new Error('Some Error text');
  //     }

  //     return axios.get(
  //       `https://api.github.com/search/${type.toLowerCase()}?q=${searchValue}+language:${lang}&sort=stars&order=desc`,
  //       {
  //         headers: { Accept: 'application/vnd.github.mercy-preview+json' }
  //       }
  //       ).then(response => response.data.items)
  //       .then(data => observer.next(data));
  //     })
}
// export default getData;
