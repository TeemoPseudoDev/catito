import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-kitty',
  templateUrl: './card-kitty.component.html',
  styleUrls: ['./card-kitty.component.scss'],
})
export class CardKittyComponent implements OnInit {

  gatitos: Observable<any[]> | undefined; // Variable para almacenar los datos

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    // Recupera datos de la colección y suscríbete a los cambios
    this.gatitos = this.firestore.collection('gatitos').valueChanges();
  }
}
