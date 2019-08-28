import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // TODO: host class передаётся, но стили не применяются в app.comp.scss
  host: { class: 'app' }
})
export class AppComponent {
  // title = 'a';
}
