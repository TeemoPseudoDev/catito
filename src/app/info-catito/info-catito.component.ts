import { Component, OnInit } from '@angular/core';
import { AbmCatitoService } from '../services/abm-catito.service';


@Component({
  selector: 'app-info-catito',
  templateUrl: './info-catito.component.html',
  styleUrls: ['./info-catito.component.scss'],
})
export class InfoCatitoComponent implements OnInit {

  camposCompletos: boolean = false;

  catito = {
    nombre: "",
    ubicacion: "",
    detalle: "",
    img: "",
  }

  constructor(private regCatito: AbmCatitoService,) { }

  enviardatos() {
    const result = this.regCatito.getCatito(this.catito)
    console.log(result)
    this.limpiarCampos()
    this.verificarCamposCompletos()
  }

  verificarCamposCompletos() {
    this.camposCompletos = !!(this.catito.nombre && this.catito.ubicacion && this.catito.detalle && this.catito.img);
  }

  limpiarCampos() {
    this.catito.nombre = '';
    this.catito.ubicacion = '';
    this.catito.detalle = '';
    this.catito.img = "";
  }


  ngOnInit() { }

}
