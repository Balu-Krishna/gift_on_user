import { PaymemtComponent } from './paymemt/paymemt.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OffersComponent } from './offers/offers.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HelpComponent } from './help/help.component';
import { SearchComponent } from './search/search.component';
import { LocationComponent } from './location/location.component';
import { MyordersComponent } from './myorders/myorders.component';
import { RemindersComponent } from './reminders/reminders.component';
import { RedeemComponent } from './redeem/redeem.component';
import { OrderconfirmationComponent } from './orderconfirmation/orderconfirmation.component';
import { VendorsComponent } from './vendors/vendors.component';
import { StoresListComponent } from './stores-list/stores-list.component';
import { VoicecommandComponent } from './voicecommand/voicecommand.component';
import { VoiceResultsComponent } from './voice-results/voice-results.component';
import { CategorystoresComponent } from './categorystores/categorystores.component';
import { StoreproductsComponent } from './storeproducts/storeproducts.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component'; 
import { WhishlistComponent } from './whishlist/whishlist.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashiondetailsComponent } from './fashiondetails/fashiondetails.component';
import { FashionproductsComponent } from './fashionproducts/fashionproducts.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { AccessoriesComponent } from './accessories/accessories.component';
const routes: Routes = [
  {
    path:  '',
    component: HomeComponent
  },
  { 
    path:  'aboutus',
    component: AboutusComponent
  },
  {
    path:  'offers',
    component: OffersComponent
  },
  {
    path:  'login',
    component: LoginComponent
  },
  {
    path:  'signup',
    component: SigninComponent
  },
  {
    path:  'profile',
    component: ProfileComponent
  },
  {
    path:  'my-orders',
    component: MyordersComponent
  },
  {
    path:  'changepassword',
    component: ChangepasswordComponent
  },
  {
    path:  'notification',
    component: NotificationsComponent
  },
  {
    path:  'help',
    component: HelpComponent
  },
  {
    path:  'search-results',
    component: SearchComponent
  },
  {
    path:  'select-location',
    component: LocationComponent
  },
  {
    path:  'My-reminders',
    component: RemindersComponent
  },
  {
    path:  'redeem',
    component: RedeemComponent
  },
  {
    path:  'order-confirmation',
    component: OrderconfirmationComponent
  },
  {
    path:  'vendors',
    component: VendorsComponent
  },
  {
    path:  'birthday',
    component:StoresListComponent
  },
  {
    path:  'voice',
    component:VoicecommandComponent
  },
  {
    path:  'voice-results',
    component:VoiceResultsComponent
  },
  {
    path:  'category-stores',
    component:CategorystoresComponent
  },
  {
    path:  'accessory-stores',
    component:AccessoriesComponent
  },
  {
    path:  'store-products',
    component:StoreproductsComponent
  },
  {
    path:  'products-details',
    component:ProductdetailsComponent
  },
    {
    path:  'wishlist',
    component:WhishlistComponent
  },
  {
    path:  'fashion-store',
    component:FashionComponent
  },
  {
    path:  'gadgets-store',
    component:GadgetsComponent
  },
  {
    path:  'fashion-details',
    component:FashiondetailsComponent
  },
  {
    path:  'fashion-products',
    component:FashionproductsComponent
  },
  {
    path:  'cart',
    component:CartComponent
  },
  {
    path:  'checkout',
    component:CheckoutComponent
  },
  {
    path:  'payment',
    component:PaymemtComponent
  },
];

@NgModule({
  imports: [  RouterModule.forRoot(routes, { useHash: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
