import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeInitialComponent } from './components/home-initial/home-initial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeInitialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
