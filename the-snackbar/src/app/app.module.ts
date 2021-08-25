import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlavorsComponent } from './flavors/flavors.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { LogInComponent } from './log-in/log-in.component';
import { SnackShackComponent } from './snack-shack/snack-shack.component';
import { MySnackShackComponent } from './my-snack-shack/my-snack-shack.component';

@NgModule({
  declarations: [
    AppComponent,
    FlavorsComponent,
    WelcomeComponent,
    PurchaseComponent,
    LogInComponent,
    SnackShackComponent,
    MySnackShackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
