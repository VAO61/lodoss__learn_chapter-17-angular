import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  host: { class: 'app__main' },
  providers: [DataService]
})
export class SearchPageComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
