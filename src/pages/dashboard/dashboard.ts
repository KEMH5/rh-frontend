import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBar } from '../components/side-bar/side-bar';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, SideBar, RouterOutlet],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css'
})
export class Dashboard {
    
}
