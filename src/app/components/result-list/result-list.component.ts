import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SetThemeService } from '../../services/set-theme.service';

// import { Injectable } from '@angular/core';

// @Injectable()
@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
  providers: [DataService, SetThemeService]

  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultListComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private setThemeService: SetThemeService
  ) {}

  ngOnInit() {}
}
