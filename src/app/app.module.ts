import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule} from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [IonicStorageModule.forRoot({
    name:"__mydb",
    driverOrder: ['indexeddb','sqlite','websql']
  }),BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [HttpClientModule, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {} 