import { Injectable } from '@angular/core';
import { CanActivate,Router , ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth:UserAuthService,public router:Router) { }
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    
    if(this.auth.isUserLoggedIn())
          return true;
      else{   
        // navigate to login component
        this.router.navigate(['/login']);
        return false;
      }    

  }
}
