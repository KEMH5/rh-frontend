import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.css'
})
export class KpiCard {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() percentage: string = '';
  @Input() changeText: string = '';
  @Input() isPositive: boolean = true;
  @Input() hasDetails: boolean = true;
  @Input() detailRoute: string = '';
  @Input() icon: string = '';

  private router = inject(Router);

  onSeeDetail() {
    if (this.detailRoute) {
      this.router.navigate([this.detailRoute]);
    }
  }
}
