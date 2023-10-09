import { Component } from '@angular/core';
import {Produit} from "../Models/Produit";

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent {

  listProduit: Produit[] = [

    {idProduit: 1, code: "P147852P", libelle: "Produit1", prixUnitaire: 12.5, tauxTVA: 0.02},
    {idProduit: 2, code: "P147552P", libelle: "Produit1", prixUnitaire: 30, tauxTVA: 0.1980},
    {idProduit: 3, code: "D14785CC", libelle: "Produit1", prixUnitaire: 20, tauxTVA: 0.1980},
    {idProduit: 4, code: "E147852P", libelle: "Produit1", prixUnitaire: 50, tauxTVA: 0.1980},
    {idProduit: 5, code: "F147852P", libelle: "Produit1", prixUnitaire: 70, tauxTVA: 0.02},


  ];

  ajusterTVA(produit: Produit): void {

    produit.tauxTVA = 0.20; // 20%

    // produit.tvaModifiee = true;
  }
}
