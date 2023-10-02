import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import {FormsModule} from "@angular/forms";
// import { FourniseurComponentComponent } from './fournisseur-component/fourniseur-component.component';
import { FournisseurComponentComponent } from './fournisseur-component/fournisseur-component.component';
import { ListFournisseurComponentComponent } from './list-fournisseur-component/list-fournisseur-component.component';
import { ListProduitComponent } from './list-produit/list-produit.component';



@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    // FourniseurComponentComponent,
    FournisseurComponentComponent,
    ListFournisseurComponentComponent,
    ListProduitComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
