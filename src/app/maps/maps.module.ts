import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import {MapsRoutingModule} from "./maps-routing.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    MapsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
  ]
})
export class MapsModule { }
