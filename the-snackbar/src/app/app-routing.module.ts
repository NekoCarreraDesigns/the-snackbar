import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlavorsComponent } from './flavors/flavors.component';
import { LogInComponent } from './log-in/log-in.component';
import { MySnackShackComponent } from './my-snack-shack/my-snack-shack.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SnackShackComponent } from './snack-shack/snack-shack.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'flavors', component: FlavorsComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'snack-shack', component: SnackShackComponent},
  {path: 'my-snack-shack', component: MySnackShackComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
