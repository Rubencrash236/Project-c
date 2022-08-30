import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListTraysComponent } from './components/list-trays/list-trays.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterProjectComponent } from './components/register-project/register-project.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'dashboard/:id', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'list-trays', component: ListTraysComponent, canActivate: [AuthGuard] },
  { path: 'register-project', component: RegisterProjectComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo:'list-trays'},
  { path: '**', component: ListTraysComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
