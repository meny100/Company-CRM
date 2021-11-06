import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const appRouter: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },

  //lazy loading of the main APP
  {
    path: '',
    loadChildren: () =>
      import('./modules/lazy-loading/lazy-loading.module').then(
        (m) => m.LazyLoadingModule
      )
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRouter), CommonModule],
  exports: [RouterModule],
})
export class AppRouteModule {}