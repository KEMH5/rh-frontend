import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil-content',
  imports: [],
  templateUrl: './acceuil-content.html',
  styleUrl: './acceuil-content.css'
})
export class AcceuilContent {

  constructor(private router: Router) { }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
