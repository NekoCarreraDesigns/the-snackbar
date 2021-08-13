import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlavorsComponent } from './flavors/flavors.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'flavors', component: FlavorsComponent},
  {path: 'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
