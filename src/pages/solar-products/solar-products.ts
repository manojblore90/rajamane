import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SolarProductsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solar-products',
  templateUrl: 'solar-products.html',
})
export class SolarProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolarProductsPage');
  }
  onclicksl() {
    this.navCtrl.push('SolarLampsPage');
  }
  onclickslt() {
    this.navCtrl.push('SolarLedLanternPage');
  }
  onclickstabl() {
    this.navCtrl.push('SolarTableLampPage');
  }
  onclickstubl() {
    this.navCtrl.push('SolarTubeLightPage');
  }
  onclickshls() {
    this.navCtrl.push('SolarHomeLightSolutionsPage');
  }
  onclickssl() {
    this.navCtrl.push('SolarStreetLightPage');
  }
}
