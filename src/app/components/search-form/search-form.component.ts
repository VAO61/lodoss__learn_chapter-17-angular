import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
// console.log(DataService);

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  providers: [DataService]
})
export class SearchFormComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
