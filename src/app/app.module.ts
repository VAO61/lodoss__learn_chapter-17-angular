import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { FormsModule } from '@angular/forms';

// material.angular
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material';
// material.angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoResultFoundComponent } from './components/no-result-found/no-result-found.component';
import { MyListPageComponent } from './pages/my-list-page/my-list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ResultListComponent } from './components/result-list/result-list.component';

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
    SearchPageComponent,
    SearchFormComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule,
    FormsModule,

    // material.angular
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    // material.angular

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
