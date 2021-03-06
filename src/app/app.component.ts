import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';


// pages
import { HomePage } from '../pages/home/home';
import { HowToUsePage } from '../pages/how-to-use/how-to-use';
import { ReferencesPage } from '../pages/references/references';
import { AboutPage } from '../pages/about/about';

import { NavChangeProvider } from '../providers/nav-change/nav-change';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  loader: any;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  showFooter: boolean = false;
  blankSrc: boolean =  false;


  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public navChangeProvider: NavChangeProvider,
    public storage: Storage,
    public loadingCtrl: LoadingController
  ) {

    this.presentLoading();
    this.initializeApp();


    //ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage },
      { title: 'Sobre', component: HowToUsePage },
      { title: 'Bibliografia', component: ReferencesPage },
      { title: 'Criação e Apoio', component: AboutPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.storage.get('introShown').then((result) => {
        if(result){
          this.rootPage = HomePage;
        } else {
          this.rootPage = HowToUsePage;
        }

        this.loader.dismiss();

      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(){
    this.navChangeProvider.getNavChangeEmitter()
      .subscribe(item => {
        this.showFooter =  item;

        if(this.nav.getActive().name == "HowToUsePage"){
          this.blankSrc = true;
        }else{
          this.blankSrc = false;
        }
      });
  }

  openPage(page) {
    if(page.title == 'Início'){
      this.nav.popToRoot();
    }else{
      this.nav.push(page.component);
    }
  }

  goToRoot(){
    this.nav.popToRoot();
  }

  presentLoading() {

    this.loader = this.loadingCtrl.create({
      spinner: "crescent",
      content: "Carregando..."
    });

    this.loader.present();

  }

}
