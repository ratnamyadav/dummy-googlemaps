import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import {Capacitor} from "@capacitor/core";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  @ViewChild('map')
  mapRef: ElementRef<HTMLElement> | undefined;

  map: GoogleMap | undefined;

  getKey() {
    if(Capacitor.isNativePlatform()) {
      if(Capacitor.getPlatform() == 'android') {
        return environment.googleMapsKey;
      } else {
        return environment.googleMapsKey;
      }
    } else {
      return environment.googleMapsKey;
    }
  }

  ngOnInit() {
    setTimeout(async () => {
      if(this.mapRef) {
        this.map = await GoogleMap.create({
          id: 'cab-map-main',
          element: this.mapRef.nativeElement,
          apiKey: this.getKey(),
          config: {
            center: {
              lat: 28.4253745,
              lng: 77.0388947,
            },
            zoom: 8,
          },
        });
      } else {
        console.log('None');
      }
    }, 1000)
  }
}
