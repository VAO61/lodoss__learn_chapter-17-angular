import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
// console.log(GetDataService);

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  providers: [GetDataService]
})
export class SearchFormComponent implements OnInit {
  constructor(private getDataService: GetDataService) {}

  ngOnInit() {}
}
