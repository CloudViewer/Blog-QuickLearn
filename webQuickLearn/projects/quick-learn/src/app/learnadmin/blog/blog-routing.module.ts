import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogAuditComponent } from './blog-audit/blog-audit.component';


const routes: Routes = [
  {
    path: 'list',
    component: BlogListComponent
  },
  {
    path: 'audit',
    component: BlogAuditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
