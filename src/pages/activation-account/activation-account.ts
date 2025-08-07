import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-activation-account',
  imports: [],
  templateUrl: './activation-account.html',
  styleUrl: './activation-account.css'
})
export class ActivationAccount {

  message: string = '';
  isOkay: boolean = true;
  submitted: boolean = false;

  constructor(
    private router: Router,
    //private authService: AuthService, // Assuming you have an AuthService for handling authentication
  ) {

   }
}
