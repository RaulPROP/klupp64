import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
      children: [
          {path: '', redirectTo: 'perfil', pathMatch: 'full'},
          {path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule'},
          {path: 'jugadas', loadChildren: './jugadas/jugadas.module#JugadasPageModule'},
          {path: 'goles', loadChildren: './goles/goles.module#GolesPageModule'},
          {path: 'otros', loadChildren: './otros/otros.module#OtrosPageModule'}
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MainPage],
})
export class MainPageModule {}
