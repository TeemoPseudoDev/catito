import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment.prod';


import { FormsModule } from '@angular/forms';
import { CardKittyComponent } from './card-kitty/card-kitty.component';
import { InfoCatitoComponent } from './info-catito/info-catito.component';
import { VarCatComponent } from './var-cat/var-cat.component';
import { PerfilCatComponent } from './perfil-cat/perfil-cat.component';



@NgModule({
  declarations: [AppComponent, CardKittyComponent, InfoCatitoComponent, VarCatComponent,PerfilCatComponent ],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), FormsModule,
    AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
