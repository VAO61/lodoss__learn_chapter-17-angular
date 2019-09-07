import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-tile',
  templateUrl: './result-tile.component.html',
  styleUrls: ['./result-tile.component.scss']
})
export class ResultTileComponent implements OnInit {
  constructor() {}

  @Input() repo;
  item = [];

  ngOnInit() {
    this.item = this.repo;
    // console.log(this.item);
  }
}
