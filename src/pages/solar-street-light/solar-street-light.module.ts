import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolarStreetLightPage } from './solar-street-light';

@NgModule({
  declarations: [
    SolarStreetLightPage,
  ],
  imports: [
    IonicPageModule.forChild(SolarStreetLightPage),
  ],
})
export class SolarStreetLightPageModule {}
