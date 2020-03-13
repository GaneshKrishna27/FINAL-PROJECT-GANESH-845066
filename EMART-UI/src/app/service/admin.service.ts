import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable}from 'rxjs'
import { Category } from '../Models/category';
import { SubCategory } from '../Models/sub-category';

const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  
})}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string='http://localhost:63845/Admin/'

  constructor(private http:HttpClient) { }
  public Addcategory(category:Category):Observable<any>
  {
    return this.http.post<any>(this.url+'Addcategory',JSON.stringify(category),Requestheaders);
  }
  public Deletecategory(Cid:string):Observable<any>
  {
    return this.http.delete<any>(this.url+'Deletecategory/'+Cid,Requestheaders);
  }
  public Addsubcategory(subcategory:SubCategory):Observable<any>
  {
    return this.http.post<any>(this.url+'Addsubcategory',JSON.stringify(subcategory),Requestheaders);
  }
  public Deletesubcategory(SCid:string):Observable<any>
  {
    return this.http.delete<any>(this.url+'Deletesubcategory/'+SCid,Requestheaders);
  }
  public Viewcategory():Observable<any>
  {
    return this.http.get<any>(this.url+'Viewcategory',Requestheaders);
  }
  public Viewsubcategory():Observable<any>
  {
    return this.http.get<any>(this.url+'Viewsubcategory',Requestheaders);
  }
  public Getcategory():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url+'Getcategory',Requestheaders);

  }
}
