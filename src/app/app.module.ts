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
import { AddUserComponent } from './add-user/add-user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MainInoviceComponent } from './main-inovice/main-inovice.component';
import { InoviceListComponent } from './inovice-list/inovice-list.component';
import { InoviceComponent } from './inovice/inovice.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    // FourniseurComponentComponent,
    FournisseurComponentComponent,
    ListFournisseurComponentComponent,
    ListProduitComponent,
    AddUserComponent,
    ErrorPageComponent,
    EditUserComponent,
    MainInoviceComponent,
    InoviceListComponent,
    InoviceComponent,
    HeaderComponent,


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
