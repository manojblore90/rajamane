import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SolarLedLanternPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solar-led-lantern',
  templateUrl: 'solar-led-lantern.html',
})
export class SolarLedLanternPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolarLedLanternPage');
  }
onclick(){
    this.navCtrl.push('EnquiryPage');
}
}
