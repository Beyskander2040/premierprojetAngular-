import { Component } from '@angular/core';
import {Fournisseur} from "../Models/Fournisseur";

@Component({
  selector: 'app-list-fournisseur-component',
  templateUrl: './list-fournisseur-component.component.html',
  styleUrls: ['./list-fournisseur-component.component.css']
})
export class ListFournisseurComponentComponent {

  listFournisseur : Fournisseur[] = [

      {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
      {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
      {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
      {idFournisseur:400,code:"40ABC452",libelle:"asus"}
  ]
  getColor(code: string): string {
    // Vérifiez si le code commence par "2A"
    if (code.startsWith("2A")) {
      return 'bold'; // Appliquer le style gras
    } else {
      return ''; // Pas de style particulier
    }
  }
  suprimerfournisseur(fournisseur : Fournisseur ):void {
    this.listFournisseur= this.listFournisseur.filter(item => item !== fournisseur);

  }
}
