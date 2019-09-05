import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-my-list-page',
  templateUrl: './my-list-page.component.html',
  styleUrls: ['./my-list-page.component.scss'],
  host: { class: 'app__main' },
  providers: [DataService]
})
export class MyListPageComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
