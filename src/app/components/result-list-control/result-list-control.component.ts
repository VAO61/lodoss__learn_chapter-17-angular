import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { SetThemeService } from '../../services/set-theme.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-result-list-control',
  templateUrl: './result-list-control.component.html',
  styleUrls: ['./result-list-control.component.scss'],
  providers: []
})
export class ResultListControlComponent implements OnInit {
  constructor(private setThemeService: SetThemeService) {}

  ngOnInit() {}
}
