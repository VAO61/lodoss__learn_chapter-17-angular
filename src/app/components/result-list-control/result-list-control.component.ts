import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-result-list-control',
  templateUrl: './result-list-control.component.html',
  styleUrls: ['./result-list-control.component.scss'],
  providers: [DataService]
})
export class ResultListControlComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
