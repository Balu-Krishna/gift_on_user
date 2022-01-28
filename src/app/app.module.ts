import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from 'src/material.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CounterComponent } from './counter/counter.component';
import { OffersComponent } from './offers/offers.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilenavComponent } from './profilenav/profilenav.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MyordersComponent } from './myorders/myorders.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HelpComponent } from './help/help.component';
import { SearchComponent } from './search/search.component';
import { StoresListComponent } from './stores-list/stores-list.component';
import { LocationComponent } from './location/location.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RemindersComponent } from './reminders/reminders.component';
import { RedeemComponent } from './redeem/redeem.component';
import { VendorsComponent } from './vendors/vendors.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OrderconfirmationComponent } from './orderconfirmation/orderconfirmation.component';
import { DashboardComponent } from './vendor-module/dashboard/dashboard.component';
import { VoicecommandComponent } from './voicecommand/voicecommand.component';
import { VoiceResultsComponent } from './voice-results/voice-results.component';
import { CategorystoresComponent } from './categorystores/categorystores.component';
import { StoreproductsComponent } from './storeproducts/storeproducts.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { ToastrModule } from 'ngx-toastr';
import { FashionComponent } from './fashion/fashion.component';
import { FashiondetailsComponent } from './fashiondetails/fashiondetails.component';
import { FashionproductsComponent } from './fashionproducts/fashionproducts.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymemtComponent } from './paymemt/paymemt.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceivedMessageComponent } from './help/received-message/received-message.component';
import { SentMessageComponent } from './help/sent-message/sent-message.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    CounterComponent,
    OffersComponent,
    LoginComponent,
    SigninComponent,
    ProfileComponent,
    ProfilenavComponent,
    ChangepasswordComponent,
    MyordersComponent,
    NotificationsComponent,
    HelpComponent,
    SearchComponent,
    StoresListComponent,
    LocationComponent,
    RemindersComponent,
    RedeemComponent,
    VendorsComponent,
    OrderconfirmationComponent,
    DashboardComponent,
    VoicecommandComponent,
    VoiceResultsComponent,
    CategorystoresComponent,
    StoreproductsComponent,
    ProductdetailsComponent,
    WhishlistComponent,
    FashionComponent,
    FashiondetailsComponent,
    FashionproductsComponent,
    CartComponent,
    CheckoutComponent,
    PaymemtComponent,
    GadgetsComponent,
    AccessoriesComponent,
    ReceivedMessageComponent,
    SentMessageComponent,
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatTabsModule,
    MatIconModule,
    MaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
