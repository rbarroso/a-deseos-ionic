import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista } from '../../app/clases/lista';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html'
})

export class DetalleComponent implements OnInit {

  idx: number;
  lista: Lista;

  constructor( public navCtrl: NavController, public navParams: NavParams) {
    this.idx = this.navParams.get("index");
    this.lista = this.navParams.get("lista");
  }

  ngOnInit() {
  }
}
