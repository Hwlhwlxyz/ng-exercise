import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Ng2chartExampleComponent } from './ng2chart-example/ng2chart-example.component';

const routes: Routes = [
  {path: "ng2chart", component: Ng2chartExampleComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
