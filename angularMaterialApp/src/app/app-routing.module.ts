import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MasterContainerComponent } from './master-container/master-container.component';
import { HomeComponent } from './home/home.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: MasterContainerComponent,
    children: [
      {
        path:'home',        
        component: HomeComponent,

      },
      {
        path:'directive',        
        component: DirectiveDemoComponent     
      },
      {
        path:'pipes',        
        component: PipeDemoComponent     
      }
    ]
  },
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
