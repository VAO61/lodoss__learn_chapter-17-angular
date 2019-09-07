import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';

import { DataService } from '../../services/data.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-result-tile',
  templateUrl: './result-tile.component.html',
  styleUrls: ['./result-tile.component.scss']
})
export class ResultTileComponent implements OnInit {
  constructor(private dataService: DataService) {}

  @Input() repo;
  item = [];

  ngOnInit() {
    this.item = this.repo;
    // console.log(this.item);
  }
}
