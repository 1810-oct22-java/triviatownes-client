import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePageComponent } from './create-page/create-page.component';

// ROUTES: EXAMPLE
/*
const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'manager', component: ManagerComponent},
  { path: 'create', component: CreatePageComponent}
];
*/

const routes: Routes = [
  { path: 'create', component: CreatePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
