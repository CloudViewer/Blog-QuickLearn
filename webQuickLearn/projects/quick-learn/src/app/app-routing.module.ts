import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'learnadmin',
    loadChildren: () => import('./learnadmin/learnadmin.module').then(m => m.LearnadminModule)
  },
  {
    path: 'learnlogin',
    loadChildren: () => import('./learnlogin/learnlogin.module').then(m => m.LearnloginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
