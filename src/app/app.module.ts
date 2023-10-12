import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as mapboxgl from 'mapbox-gl';

(mapboxgl as any).accessToken =
  'pk.eyJ1Ijoiam9zdWVwZXJjeSIsImEiOiJjbG5kZDRtd3UwM2VxMm5vOG1vcHR1ODcxIn0.8jqemvLFWQvbpVMjzyDwfQ';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
