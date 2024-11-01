import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrump.component.html',
  styleUrls: ['./breadcrump.component.css']
})
export class BreadcrumpComponent implements OnInit {
  breadcrumb:Array<{label:string,url:string}>=[];

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: any)=>event instanceof NavigationEnd)
    ).subscribe(() =>{
      this.breadcrumb=this.createBreadcrumb(this.router.routerState.root);
    });
  }
 private createBreadcrumb(route: ActivatedRoute,url:string='',breadcrumb:Array<{label:string,url:string}>=[]):Array<{label:string,url:string}> {

  const children : ActivatedRoute[]=route.children;
  if(children.length===0){
    return breadcrumb;
  }
for(const child of children){
  const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
  if (routeURL !== '') {
    url += `/${routeURL}`;
    breadcrumb.push({ label: routeURL, url });
  }
  return this.createBreadcrumb(child, url, breadcrumb);
}
return breadcrumb;
}
}
    
