
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isAdmin = true; // Replace with actual admin check logic
console.log('AdminGuard: isAdmin = ',isAdmin);
    if (isAdmin) {
      return true;
    } else {
      this.router.navigate(['dashboard']); // Redirect if not admin
      return false;
    }
  }
  
}