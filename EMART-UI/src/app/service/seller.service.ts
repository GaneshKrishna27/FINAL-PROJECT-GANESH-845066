import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable}from 'rxjs'
import{Seller}from '../Models/seller';
import { Items } from '../Models/items';
import { Category } from '../Models/category';
import { SubCategory } from '../Models/sub-category';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization':'Bearer '+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string='http://localhost:63845/Item/'
  url1:string='http://localhost:63845/Seller/'

  constructor(private http:HttpClient) { }
  public Getitems(Iid:string):Observable<Items>
  {
    return this.http.get<Items>(this.url+'Getitem/'+Iid,Requestheaders);
  }
  public Viewitems(Sid:string):Observable<any>
  {
    return this.http.get<any>(this.url+'Viewitems/'+Sid,Requestheaders);
  }
  public Additem(items:Items):Observable<any>
  {
    return this.http.post<any>(this.url+'Additem',JSON.stringify(items),Requestheaders);
  }
  public Updateitem(items:Items):Observable<any>
  {
    return this.http.put<any>(this.url+'Updateitem',items,Requestheaders);
  }
  public Deleteitem(Iid:string):Observable<Items>
  {
    return this.http.delete<Items>(this.url+'Deleteitem/'+Iid,Requestheaders);
  }
  public GetById(Sid:string):Observable<Seller>
  {
    return this.http.get<Seller>(this.url1+'GetById/'+Sid,Requestheaders);

  }
  public Editprofile(seller:Seller):Observable<any>
  {
    return this.http.put<any>(this.url1+'Editprofile',JSON.stringify(seller),Requestheaders);
  }
  public Getcategory():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url+'Getcategory',Requestheaders);
  }
  public Getsubcategory(Cid:string):Observable<SubCategory[]>
  {
    return this.http.get<SubCategory[]>(this.url+'Getsubcategory/'+Cid,Requestheaders);
  }
  

}
