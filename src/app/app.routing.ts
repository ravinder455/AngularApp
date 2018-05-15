import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {LoginComponent} from './components/login/login.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
