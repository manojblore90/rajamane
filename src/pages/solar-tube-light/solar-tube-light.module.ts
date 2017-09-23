import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolarTubeLightPage } from './solar-tube-light';

@NgModule({
  declarations: [
    SolarTubeLightPage,
  ],
  imports: [
    IonicPageModule.forChild(SolarTubeLightPage),
  ],
})
export class SolarTubeLightPageModule {}
