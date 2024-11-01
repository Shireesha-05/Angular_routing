import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentStep = 1;

  // Properties to hold user input
  name: string = '';
  email: string = '';
  phone: string = '';
  language: string = '';
  notifications: boolean = false;

  nextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submit(): void {
    alert('profile updated succesfully');
    console.log('User  Data:', {
      name: this.name,
      email: this.email,
      phone: this.phone,
      language: this.language,
      notifications: this.notifications,
    });
    // Reset the wizard
    this.currentStep = 1;
    this.resetForm();
  }

  // Reset form fields
  resetForm(): void {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.language = '';
    this.notifications = false;
  }
}
