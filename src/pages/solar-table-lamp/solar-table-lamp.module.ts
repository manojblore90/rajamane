import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolarTableLampPage } from './solar-table-lamp';

@NgModule({
  declarations: [
    SolarTableLampPage,
  ],
  imports: [
    IonicPageModule.forChild(SolarTableLampPage),
  ],
})
export class SolarTableLampPageModule {}
