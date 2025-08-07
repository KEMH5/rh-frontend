import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarItems } from "./side-bar-items/side-bar-items";
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { MENU_ITEMS } from '../../../app/data/data';
import { MANAGE_ITEMS } from '../../../app/data/manage';
import { MAIN_ITEMS } from '../../../app/data/main-menu';

@Component({
  selector: 'app-side-bar',
  imports: [SideBarItems, NgOptimizedImage, CommonModule],
  templateUrl: './side-bar.html',
  standalone: true,
  styleUrl: './side-bar.css'
})
export class SideBar {
  menuItems = MENU_ITEMS;
  managementItems = MANAGE_ITEMS;
  principalItems = MAIN_ITEMS;

  activeItem: string = '';

  private router = inject(Router);

  setActiveItem(itemDesc: string) {
    console.log('Clic détecté sur:', itemDesc);
    this.activeItem = itemDesc;
    // Mapper les descriptions vers les routes
    const routeMap: { [key: string]: string } = {
      'Dashboard': '/dashboard/main',
      'Hiring': '/dashboard/hiring',
      'Inbox': '/dashboard/inbox',
      'Employee': '/dashboard/employee',
      'Attendance': '/dashboard/attendance',
      'Report': '/dashboard/report',
      'Help & Support': '/dashboard/help-support',
      'Setting': '/dashboard/setting'
    };

    const route = routeMap[itemDesc];
    console.log('Route mappée:', route);
    if (route) {
      this.router.navigate([route]).then(success => {
        console.log('Navigation réussie:', success);
      }).catch(error => {
        console.error('Erreur navigation:', error);
      });
    } else {
      console.error('Aucune route trouvée pour:', itemDesc);
    }
  }

  isItemActive(itemDesc: string): boolean {
    return this.activeItem === itemDesc;
  }
}
