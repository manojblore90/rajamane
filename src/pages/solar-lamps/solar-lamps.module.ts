import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolarLampsPage } from './solar-lamps';

@NgModule({
  declarations: [
    SolarLampsPage,
  ],
  imports: [
    IonicPageModule.forChild(SolarLampsPage),
  ],
})
export class SolarLampsPageModule {}
