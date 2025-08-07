import { Component } from '@angular/core';
import { KpiCard } from '../kpi-card/kpi-card';
import { AttendanceCard } from '../attendance-card/attendance-card';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [KpiCard, AttendanceCard],
  templateUrl: './dashboard-main.html',
  styleUrl: './dashboard-main.css'
})
export class DashboardMain {

}
