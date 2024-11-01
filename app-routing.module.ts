import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { AdminGuard } from './guards/admin.guard';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceResolver } from './resolver/service.resolver';
const routes: Routes = [
  {path: '',component:HomeComponent,data:{breadcrumb:'Home'}},
 
  {path: 'about',component:AboutComponent,data:{breadcrumb:'About'}},
  {path: 'services/:id',component:ServicesComponent ,resolve:{service:ServiceResolver},data:{breadcrumb:'Services/id'}},
  
  {path:'services',loadChildren:()=>import('./services/services.module').then(m=>m.ServicesModule),
    data:{breadcrumb:'Services'}
  },
 
  {path:'contact',component:ContactComponent},
  {path:'dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
    data:{breadcrumb:'Dashboard'}
    ,canActivate:[AuthGuard]},

  {path:'pagenotfound',component:PageNotFoundComponent},
    {path:'**',redirectTo:'pagenotfound'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function data(reason: any) {
  throw new Error('Function not implemented.');
}

