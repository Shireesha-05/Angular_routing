import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { ServiceService } from '../service.service';
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  serviceId:string | null =null;
  details:any;
  id!:string;
  
  constructor(private route:ActivatedRoute,private serviceService:ServiceService) { 
    
  }


  ngOnInit()
{
  this.id=this.route.snapshot.paramMap.get('id')!;
}

 
   getServiceDetails():void{
    // console.log('Getting service details...');
    // this.serviceService.getServiceById(this.id).subscribe((service: any) => {
    // this.service = service;
    // console.log('Service details:', service);
    
  // });

  this.route.data.subscribe(temp=>{this.details=temp['service']});
  console.log(this.details);
   }
  
}



// export class ServiceComponent implements OnInit {
//   service: any;

//   constructor(private serviceService: ServiceService) { }

//   ngOnInit(): void {
//     this.serviceService.getServiceById(1).subscribe(service => {
//       this.service = service;
//     });
//   }
// }
