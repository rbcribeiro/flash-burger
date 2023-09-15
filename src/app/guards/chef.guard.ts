import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

export class chefGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');

    if (this.isValidToken(token)) {
      return true; 
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  private isValidToken(token: string | null): boolean {
        return token !== null;
  }
};
