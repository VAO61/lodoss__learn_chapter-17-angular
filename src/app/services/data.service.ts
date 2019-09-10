import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  searchList = [];
  myList = [];

  addRemoveRepo(item) {
    const found = this.myList.find(i => i.id === item.id);
    if (found) {
      this.myList = this.myList.filter(i => i.id !== item.id);
    } else {
      this.myList = [...this.myList, item];
    }
    // console.log(item);
    // console.log(this.myList);
  }

  isMyListExists(item) {
    return !!this.myList.find(i => i.id === item.id);
  }
}
