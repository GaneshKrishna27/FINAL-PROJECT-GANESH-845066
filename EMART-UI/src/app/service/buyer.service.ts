import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable}from 'rxjs'
import { Buyer } from '../Models/buyer';
import { Items } from '../Models/items';
import { Category } from '../Models/category';
import { PurchaseHistory } from '../Models/purchase-history';
import { Cart } from '../Models/cart';

const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization':'Bearer '+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:63845/Buyer/'

  constructor(private http:HttpClient) { }
  public GetById(Bid:string):Observable<Buyer>
  {
    return this.http.get<Buyer>(this.url+'GetById/'+Bid,Requestheaders);

  }
  public Editprofile(buyer:Buyer):Observable<any>
  {
    return this.http.put<any>(this.url+'Editprofile',JSON.stringify(buyer),Requestheaders);
  }
  public Getallitems():Observable<any>
  {
    return this.http.get<any>(this.url+'Getallitems',Requestheaders);
  }
  public SearchItem(Itemname:string):Observable<any>
  {
    return this.http.get<any>(this.url+'Search/'+Itemname,Requestheaders);
  }
  public Getcategory():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url+'Getcategory',Requestheaders);
  }
  public SearchByCategoryId(Cid:string):Observable<any>
  {
    return this.http.get<any>(this.url+'Searchbycategoryid/'+Cid,Requestheaders);
  }

  public BuyItem(obj:PurchaseHistory):Observable<any>
{
  return this.http.post<any>(this.url+'Buyitem',obj,Requestheaders);
}c
public Purchasehistory(Bid:string):Observable<any>
{
  return this.http.get<any>(this.url+'Purchasehistory/'+Bid,Requestheaders);
}
public AddtoCart(cart:Cart):Observable<any>{
  return this.http.post<any>(this.url+'Addtocart',cart,Requestheaders);
}
public GetCartItems(Bid:string):Observable<any>
{
  return this.http.get<any>(this.url+'Getcartitems/'+Bid,Requestheaders);
}
public RemoveCartItem(Cartid:string):Observable<Cart>
{
  return this.http.delete<Cart>(this.url+'Removeitem/'+Cartid,Requestheaders);
}
public GetCount(Bid:string):Observable<any>
{
  console.log(Requestheaders);
  return this.http.get<any>(this.url+'Getcount/'+Bid,Requestheaders);
}
}
