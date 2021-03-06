import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  renderObj: any = {
    title: '',
    icon: '',
    srcs: []
  };

  videoIndex: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.videoIndex = 0;
    this.renderObj.title = navParams.get('title');
    this.renderObj.icon = navParams.get('icon');
    this.renderObj.srcs = navParams.get('srcs');
  }

  ionViewDidLoad() {
  }

  subIndex(){
    let player = <HTMLMediaElement>document.getElementById('player');
    this.videoIndex -= 1;
    player.load();
    player.play();
  }

  addIndex(){
    let player = <HTMLMediaElement>document.getElementById('player');
    this.videoIndex += 1;
    player.load();
    player.play();
  }

  closeModal(){
    this.videoIndex = 0;
    this.viewCtrl.dismiss();
  }

}
