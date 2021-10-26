import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutusComponent
  },  
  { path: 'bookshome', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  {
    path:"",
    redirectTo:'bookshome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
