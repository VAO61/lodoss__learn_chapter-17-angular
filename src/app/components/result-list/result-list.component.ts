import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';

// import { DataService } from '../../services/data.service';
import { SetThemeService } from '../../services/set-theme.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
  providers: []

  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultListComponent implements OnInit {
  constructor(
    // private dataService: DataService,
    private setThemeService: SetThemeService
  ) {}

  @Input() repos;
  // items = [];

  ngOnInit() {}
}
