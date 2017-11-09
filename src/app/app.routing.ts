import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { UserComponent } from './user/user.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CartComponent } from './cart/cart.component';
import { NewsletterConfirmComponent } from './newsletter-confirm/newsletter-confirm.component';
import { FourzerofourComponent } from './fourzerofour/fourzerofour.component';

const appRoutes: Routes = [
  {
     path: '',
     component: HomepageComponent
   },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
   },
   {
     path: 'newsletter-confirmation',
     component: NewsletterConfirmComponent
   },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'boxes/:id',
    component: ProductDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    component: UserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '404',
    component: FourzerofourComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
