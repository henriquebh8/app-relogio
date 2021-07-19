import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.page.html',
  styleUrls: ['./configuracao.page.scss'],
})
export class ConfiguracaoPage implements OnInit {
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;
  mydate :any;
 
  constructor(public alertController: AlertController,private storage: Storage) { 
  this.customPickerOptions = {
    buttons: [{
      text: 'Save',
      handler: () => console.log('Clicked Save!')
    }, 
    {
      text: 'Log',
      handler: () => {
        console.log('');
        return false;
      }
    }]
  }
}

async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Alarme',
    subHeader: 'Seu lembrete para beber água',
    message: 'Foi definido com sucessso.',
    buttons: ['OK']
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}
doSomething(date) {
  this.storage.set('date', moment(date).format('YYYY-MM-DD')); 
}
doSomething2(hour) {
  this.storage.set('hour', moment(hour).format('HH:mm')); 
 
}


  ngOnInit() {
    moment().format('lll'); 
    moment.locale('pt-br');
    moment().format('lll');
    this.storage.set('date', 'No Date');
    this.storage.set('hour','No hour');
    setInterval(() => {
      this.storage.get('date').then((val) => {
        this.storage.get('hour').then((val2) => {
          if(  moment().isSameOrAfter(val2)){
this.presentAlert();
          }
          console.log('data:  ' ,val);
          console.log('hora: ', val2);
        });
      });
    
       }, 5000);

  }

}
