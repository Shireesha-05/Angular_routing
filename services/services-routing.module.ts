import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ServiceResolver } from '../resolver/service.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: ServicesComponent,
    resolve: {
      service: ServiceResolver
    }
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
