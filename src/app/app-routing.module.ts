import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUserComponent} from "./list-user/list-user.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {MainInoviceComponent} from "./main-inovice/main-inovice.component";

const routes: Routes = [
  // {oath:"",redirectTo:"Home",pathMatch:"full"},
  // {path :"users",component:ListUserComponent ,
  //   children:[{path : "addUser",component:AddUserComponent}]},
  // {path : "editUser/:param",component:EditUserComponent}
  // {path : "addUser",component:AddUserComponent}
  // {path: "* *" , componnent:ErrorPageComponent}
  { path: 'inovice-management', component: MainInoviceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
