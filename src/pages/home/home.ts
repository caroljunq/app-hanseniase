import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HowToUsePage } from '../how-to-use/how-to-use';
import { ReferencesPage } from '../references/references';
import { SymptomsPage } from '../symptoms/symptoms';


import { SymptomsProvider } from '../../providers/symptoms-provider/symptoms-provider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  options: Array<{id: string,title: string, subtitle: string, icon: string, component: any}> = [
    {
      id: 'eh',
      title: 'o que é',
      subtitle: '',
      icon: './assets/icon/o-que-e.png',
      component: ''
    },
    {
      id: 'fazer',
      title: 'o que fazer',
      subtitle: '',
      icon: './assets/icon/o-que-fazer.png',
      component: ''
    },
    {
      id: 'neural',
      title: 'sinais e sintomas',
      subtitle: 'compromentimento neural',
      icon: './assets/icon/sinais.png',
      component: SymptomsPage
    },
    {
      id: 'manchas',
      title: 'sinais e sintomas',
      subtitle: 'manchas',
      icon: './assets/icon/sinais-manchas.png',
      component: SymptomsPage
    },
    {
      id:'outros',
      title: 'outros sinais e sintomas',
      subtitle: '',
      icon: './assets/icon/outros.png',
      component: SymptomsPage
    },
    {
      id: 'profissional',
      title: 'se você não é um professional de saúde o que fazer',
      subtitle: '',
      icon: './assets/icon/ambulancia.png',
      component: ''
    },
    {
      id: 'como',
      title: 'como usar o app?',
      subtitle: '',
      icon: './assets/icon/como-usar.png',
      component: HowToUsePage
    },
    {
      id: 'referencias',
      title: 'referências',
      subtitle: '',
      icon: './assets/icon/referencias.png',
      component: ReferencesPage
    }
  ];

  @Input() option;

  constructor(
    public navCtrl: NavController,
    public symptomsProvider: SymptomsProvider

  ) { }

  openPage(option){
    this.navCtrl.push(option.component);

    //in case of option is about symptoms
    if(option.id == 'neural' || option.id == 'manchas' || option.id == 'outros'){
      this.symptomsProvider.setRenderObj(option.id);
    }
  }


}
