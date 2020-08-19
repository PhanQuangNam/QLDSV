import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { HomeComponent } from './home/home.component';
import { DaotaoComponent } from './full-daotao/daotao/daotao.component';
import { DaotaobangtinComponent } from './full-daotao/daotaobangtin/daotaobangtin.component';
import { DaotaoQLTKComponent } from './full-daotao/daotao-qltk/daotao-qltk.component';
import { DaotaothemtkComponent } from './full-daotao/daotaothemtk/daotaothemtk.component';
import { DaotaoQlkyhocComponent } from './full-daotao/daotao-qlkyhoc/daotao-qlkyhoc.component';
import { DaotaothemkyhocComponent } from './full-daotao/daotaothemkyhoc/daotaothemkyhoc.component';
import { DaotaoQlmhComponent } from './full-daotao/daotao-qlmh/daotao-qlmh.component';
import { DaotaothemmonhocComponent } from './full-daotao/daotaothemmonhoc/daotaothemmonhoc.component';
import { DaotaoQllhComponent } from './full-daotao/daotao-qllh/daotao-qllh.component';
import { DaotaothemlophocComponent } from './full-daotao/daotaothemlophoc/daotaothemlophoc.component';
import { EditLophocComponent } from './full-daotao/edit-lophoc/edit-lophoc.component';
import { DaotaoQldiemComponent } from './full-daotao/daotao-qldiem/daotao-qldiem.component';
import { GiangvienComponent } from './giangvien/giangvien.component';
import { GiangvienMonhocComponent } from './giangvien-monhoc/giangvien-monhoc.component';
import { GiangvienLophocComponent } from './giangvien-lophoc/giangvien-lophoc.component';
import { GiangvienDiemComponent } from './giangvien-diem/giangvien-diem.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrangchuComponent,
    HomeComponent,
    DaotaoComponent,
    DaotaobangtinComponent,
    DaotaoQLTKComponent,
    DaotaothemtkComponent,
    DaotaoQlkyhocComponent,
    DaotaothemkyhocComponent,
    DaotaoQlmhComponent,
    DaotaothemmonhocComponent,
    DaotaoQllhComponent,
    DaotaothemlophocComponent,
    EditLophocComponent,
    DaotaoQldiemComponent,
    GiangvienComponent,
    GiangvienMonhocComponent,
    GiangvienLophocComponent,
    GiangvienDiemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
