import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  host: { class: 'app__main' },
  providers: []
})
export class SearchPageComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
