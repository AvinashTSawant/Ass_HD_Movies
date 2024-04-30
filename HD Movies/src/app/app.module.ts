import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { ImageslidComponent } from './imageslid/imageslid.component';
import { MoviesComponent } from './movies/movies.component';










@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ImageslidComponent,
    MoviesComponent,
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
   
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
