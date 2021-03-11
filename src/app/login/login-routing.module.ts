import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginTabComponent } from './login-tab/login-tab.component';

const routes: Routes = [{
  path: '',
  component: LoginTabComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
