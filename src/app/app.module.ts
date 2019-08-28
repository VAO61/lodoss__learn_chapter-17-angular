import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoResultFoundComponent } from './components/no-result-found/no-result-found.component';
import { MyListPageComponent } from './pages/my-list-page/my-list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes = [
  { path: '', component: SearchPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'my-list', component: MyListPageComponent }
  // {path: '', component: ''},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoResultFoundComponent,
    MyListPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
