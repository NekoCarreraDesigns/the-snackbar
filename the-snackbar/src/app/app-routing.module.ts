import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlavorsComponent } from './flavors/flavors.component';
import { LogInComponent } from './log-in/log-in.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'flavors', component: FlavorsComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'log-in', component: LogInComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
