import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isAuthenticated = true; // Replace with actual authentication check
console.log('AuthGuard: isAuthenticated: ',isAuthenticated)
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['']); // Redirect if not authenticated
      return false;
    }
  }
}