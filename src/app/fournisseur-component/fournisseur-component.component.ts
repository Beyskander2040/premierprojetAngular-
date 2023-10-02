import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent {

  idFournisseur !: number;
  code !: string;
  libelle !: string;
  hide !:boolean;
  constructor() {
    this.idFournisseur = 105;
    this.code = 'A104B89';
    this.libelle = 'MyTeck';
    this.hide = false ;
  }
  toggleHide() {
    this.hide = !this.hide ;
    console.log('valeur : ' , this.hide );

}

}
