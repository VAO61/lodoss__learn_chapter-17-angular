import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  constructor(private dataService: DataService) {}

  @Input() data;
  item = [];

  ngOnInit() {
    this.item = this.data;
    // console.log(this.item);
  }
}
