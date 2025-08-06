import { Component } from '@angular/core';
import { AcceuilContent } from '../acceuil-content/acceuil-content';
import { Header } from '../header/header';
@Component({
  selector: 'app-acceuil',
  imports: [Header, AcceuilContent],
  templateUrl: './acceuil.html',
  standalone: true,
  styleUrl: './acceuil.css'
})
export class Acceuil {

}
