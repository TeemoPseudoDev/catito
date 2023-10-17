import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-var-cat',
  templateUrl: './var-cat.component.html',
  styleUrls: ['./var-cat.component.scss'],
})
export class VarCatComponent  implements OnInit {

  constructor() { }

  onButtonClick() {
    console.log('asdasd');
    // Puedes colocar más lógica aquí si es necesario
  }

  ngOnInit() {}

}
