import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Account/login/login.component';
import { SignupBuyerComponent } from './Account/signup-buyer/signup-buyer.component';
import { SignupSellerComponent } from './Account/signup-seller/signup-seller.component';
import { AdditemsComponent } from './Seller/additems/additems.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';


import { SearchComponent } from './Buyer/search/search.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { BuyproductComponent } from './Buyer/buyproduct/buyproduct.component';
import { AdminIndexComponent } from './Admin/admin-index/admin-index.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { HomeComponent } from './Account/home/home.component';
import { SellerindexComponent } from './Seller/sellerindex/sellerindex.component';
import { BuyerindexComponent } from './Buyer/buyerindex/buyerindex.component';
import { EditprofileComponent } from './Buyer/editprofile/editprofile.component';
import { EditprofilesComponent } from './Seller/editprofiles/editprofiles.component';
import { ContactComponent } from './Account/contact/contact.component';
import { ViewcategoryComponent } from './Admin/viewcategory/viewcategory.component';
import { ViewsubcategoryComponent } from './Admin/viewsubcategory/viewsubcategory.component';
import { ViewProfilesComponent } from './Seller/view-profiles/view-profiles.component';
import { ViewprofileComponent } from './Buyer/viewprofile/viewprofile.component';
import{LogoutComponent}from'./Account/logout/logout.component';
import { CheckoutComponent } from './Buyer/checkout/checkout.component';



const routes: Routes = [
  {path:'sellerindex',component:SellerindexComponent,children:[
  {path:'add-items',component:AdditemsComponent},
  {path:'view-items',component:ViewItemsComponent},
  {path:'view-reports',component:ViewReportsComponent},
  {path:'viewprofiles',component:ViewProfilesComponent},
  {path:'editprofiles',component:EditprofilesComponent}
]},
  {path:'buyerindex',component:BuyerindexComponent},
  {path:'search',component:SearchComponent},
  {path:'viewcart',component:ViewcartComponent},
  {path:'purchase-history',component:PurchaseHistoryComponent},
  {path:'buyproduct',component:BuyproductComponent},
  {path:'viewprofile',component:ViewprofileComponent},
  {path:'editprofile',component:EditprofileComponent},
  {path:'checkout',component:CheckoutComponent},

{path:'adminindex',component:AdminIndexComponent,children:[
  {path:'block-unblock-buyer',component:BlockUnblockBuyerComponent},
  {path:'block-unblock-seller',component:BlockUnblockSellerComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path:'viewcategory',component:ViewcategoryComponent},
  {path:'viewsubcategory',component:ViewsubcategoryComponent},
  {path:'add-subcategory',component:AddSubCategoryComponent},

  {path:'daily-report',component:DailyReportsComponent}
]},
{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'signup-buyer',component:SignupBuyerComponent},
{path:'signup-seller',component:SignupSellerComponent},
{path:'logout',component:LogoutComponent},
{path:'contact',component:ContactComponent},
{path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
