import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  id:string='';
  

  
  

  

  getServiceById(serviceId: string): Observable<any>
  {
    const servicesData = [
      {
        "id": '1',
        "name": "Service 1",
        "description": "This is service 1"
      },
      {
        "id": '2',
        "name": "Service 2",
        "description": "This is service 2"
      },
      {
        "id": '3',
        "name": "Service 3",
        "description": "This is service 3"
      }
    ];
    const details=servicesData.find(s=>s.id===serviceId);
    return of(details);
  }
}

//   private apiUrl = 'https://api.jsonbin.io/b/61e47f23c0234d69bca9a053';

//   constructor(private http: HttpClient) { }

//   getServiceById(serviceId: any): Observable<any> {
//     return this.http.get(`${this.apiUrl}/${serviceId}`);
//   }

//   getServices(): Observable<any> {
//     return this.http.get(this.apiUrl);
//   }
// }