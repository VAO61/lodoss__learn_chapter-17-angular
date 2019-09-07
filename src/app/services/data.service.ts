import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  searchList = [];
  myList = [];

  addRemoveRepo(item) {
    this.myList.push(item);
    console.log(item);
  }
}
