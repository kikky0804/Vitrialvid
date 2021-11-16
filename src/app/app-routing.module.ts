import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageIndexComponent } from './components/page-index/page-index.component';

const appRoutes = [
  { path: '', component: PageIndexComponent,  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
