import { Injectable } from '@angular/core';
import { AngularFirestore  } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class AbmCatitoService {

  constructor( private firestore : AngularFirestore ) { }


  async getCatito(catito: object){
    return await this.firestore.collection('gatitos').add(catito)
  }

}
