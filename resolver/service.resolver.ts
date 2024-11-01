import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceResolver implements Resolve<any> {
  constructor(private service: ServiceService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const serviceId=route.params['id'];
    return this.service.getServiceById(serviceId);
  }
}
 