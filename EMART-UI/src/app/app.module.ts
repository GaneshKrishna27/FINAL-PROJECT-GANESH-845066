import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AdditemsComponent } from './Seller/additems/additems.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';

import { SearchComponent } from './Buyer/search/search.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { ViewprofileComponent } from './Buyer/viewprofile/viewprofile.component';
import { AdminIndexComponent } from './Admin/admin-index/admin-index.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { LoginComponent } from './Account/login/login.component';
import { SignupSellerComponent } from './Account/signup-seller/signup-seller.component';
import { SignupBuyerComponent } from './Account/signup-buyer/signup-buyer.component';
import { BuyproductComponent } from './Buyer/buyproduct/buyproduct.component';
import { HomeComponent } from './Account/home/home.component';
import { SellerindexComponent } from './Seller/sellerindex/sellerindex.component';
import { BuyerindexComponent } from './Buyer/buyerindex/buyerindex.component';
import { EditprofileComponent } from './Buyer/editprofile/editprofile.component';
import { EditprofilesComponent } from './Seller/editprofiles/editprofiles.component';
import { ContactComponent } from './Account/contact/contact.component';
import{HttpClientModule}from '@angular/common/http';
import{UserService} from './service/user.service';
import { BuyerService } from './service/buyer.service';
import { SellerService } from './service/seller.service';
import { AdminService } from './service/admin.service';
import { ViewcategoryComponent } from './Admin/viewcategory/viewcategory.component';
import { ViewsubcategoryComponent } from './Admin/viewsubcategory/viewsubcategory.component';
import { UserAuthService } from './authentications/user-auth.service';
import { AuthGuardService } from './authentications/auth-guard.service';
import { ViewProfilesComponent } from './Seller/view-profiles/view-profiles.component';
import { LogoutComponent } from './Account/logout/logout.component';
import { CheckoutComponent } from './Buyer/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent, 
    ServicesComponent,
    AdditemsComponent,
    ViewItemsComponent,
    ViewReportsComponent,
   
    SearchComponent,
    ViewcartComponent,
    PurchaseHistoryComponent,
    ViewprofileComponent,
    AdminIndexComponent,
    BlockUnblockBuyerComponent,
    BlockUnblockSellerComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    DailyReportsComponent,
    LoginComponent,
    SignupSellerComponent,
    SignupBuyerComponent,
    BuyproductComponent,
    HomeComponent,
    SellerindexComponent,
    BuyerindexComponent,
    EditprofileComponent,
    EditprofilesComponent,
    ContactComponent,
    ViewcategoryComponent,
    ViewsubcategoryComponent,
    ViewProfilesComponent,
    LogoutComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,BuyerService,SellerService,AdminService,UserAuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
