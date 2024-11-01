import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  onSubmit(form: any) {
    console.log(form.value);
    alert('feedback is saved');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
