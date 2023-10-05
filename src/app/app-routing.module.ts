import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },

  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: '**', component: NoFoundComponent },


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    CommonModule,
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
