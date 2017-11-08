import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NewsletterConfirmComponent } from './newsletter-confirm/newsletter-confirm.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    HomepageComponent,
    CartComponent,
    ContactComponent,
    ConfirmationComponent,
    AboutComponent,
    ProductDetailComponent,
    NewsletterConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  providers: [AuthGuardService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
