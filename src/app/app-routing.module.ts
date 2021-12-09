import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { PageIndexComponent } from './components/page-index/page-index.component';

const appRoutes = [
  { path: '', component: PageIndexComponent,  pathMatch: 'full'},
  {path: 'acerca', component: AcercaComponent, pathMatch: 'full'},
  {path: 'galeria', component: GaleriaComponent, pathMatch: 'full'},
  {path: 'contacto', component: ContactoComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
