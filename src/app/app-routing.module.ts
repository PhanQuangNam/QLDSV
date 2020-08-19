import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DaotaoQLTKComponent } from './full-daotao/daotao-qltk/daotao-qltk.component';
import { DaotaobangtinComponent } from './full-daotao/daotaobangtin/daotaobangtin.component';
import { DaotaothemtkComponent } from './full-daotao/daotaothemtk/daotaothemtk.component';
import { DaotaoComponent } from './full-daotao/daotao/daotao.component';
import { DaotaoQlkyhocComponent } from './full-daotao/daotao-qlkyhoc/daotao-qlkyhoc.component';
import { DaotaothemkyhocComponent } from './full-daotao/daotaothemkyhoc/daotaothemkyhoc.component';
import { DaotaoQlmhComponent } from './full-daotao/daotao-qlmh/daotao-qlmh.component';
import { DaotaothemmonhocComponent } from './full-daotao/daotaothemmonhoc/daotaothemmonhoc.component';
import { DaotaoQllhComponent } from './full-daotao/daotao-qllh/daotao-qllh.component';
import { DaotaothemlophocComponent } from './full-daotao/daotaothemlophoc/daotaothemlophoc.component';
import { EditLophocComponent } from './full-daotao/edit-lophoc/edit-lophoc.component';
import { DaotaoQldiemComponent } from './full-daotao/daotao-qldiem/daotao-qldiem.component';

const routes: Routes = [
  {path :"", redirectTo :"home" ,pathMatch:"full"},
  {path :"home" ,component : HomeComponent},
  {path :"login" ,component : LoginComponent},
  {path :"daotao" ,component : DaotaoComponent,
  children : [
    {path :"", redirectTo :"daotao/bangtin" ,pathMatch:"full"},
    {path :"bangtin" ,component : DaotaobangtinComponent},
    {path :"daotao-qltk" ,component : DaotaoQLTKComponent},
    {path :"daotaothemtk" ,component : DaotaothemtkComponent},
    {path :"daotao-qlkyhoc" ,component : DaotaoQlkyhocComponent},
    {path :"daotaothemkyhoc" ,component : DaotaothemkyhocComponent},
    {path :"daotao-qlmh" ,component : DaotaoQlmhComponent},
    {path :"daotaothemmonhoc" ,component : DaotaothemmonhocComponent},
    {path :"daotao-qllh" ,component : DaotaoQllhComponent},
    {path :"daotaothemlophoc" ,component : DaotaothemlophocComponent},
    {path :"edit-lophoc" ,component : EditLophocComponent},
    {path :"daotao-qldiem" ,component : DaotaoQldiemComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
