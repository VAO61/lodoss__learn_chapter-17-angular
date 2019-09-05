import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  constructor() {}

  @Input() data;
  item = [];

  ngOnInit() {
    this.item = this.data;
    console.log(this.item);
  }
}
