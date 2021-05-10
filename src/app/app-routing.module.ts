import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StatusComponent } from './status/status.component';


const routes: Routes = [
{
  path:'', redirectTo:'register',pathMatch:'full'
},
{
  path:'register', component: RegisterComponent
},
{
  path:'login', component:LoginComponent
},
{
  path:'status',component:StatusComponent
},
{
  path:'dashboard',component:DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
