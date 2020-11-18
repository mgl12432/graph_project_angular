import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphindexComponent } from './graphindex/graphindex.component';
import { LinechartComponent } from './linechart/linechart.component';

const routes: Routes = [
  {
    path: '',
    component:DashboardComponent
  },
  {
    path: 'graphindex',
    component:GraphindexComponent
  },
  {
    path: 'graphindex/linechart',
    component:LinechartComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})

export class AppRoutingModule { }
