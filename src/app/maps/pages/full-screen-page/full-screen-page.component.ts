import { AfterViewInit, Component } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';


(mapboxgl as any).accessToken = 'pk.eyJ1Ijoiam9zdWVwZXJjeSIsImEiOiJjbG5kZDRtd3UwM2VxMm5vOG1vcHR1ODcxIn0.8jqemvLFWQvbpVMjzyDwfQ';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css'],
})
export class FullScreenPageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
   const map = new mapboxgl.Map({
     container: 'map', // container ID
     style: 'mapbox://styles/mapbox/streets-v12', // style URL
     center: [-12.0413837, 76.9324266], // starting position [lng, lat]
     zoom: 20, // starting zoom
   });
  }
}
