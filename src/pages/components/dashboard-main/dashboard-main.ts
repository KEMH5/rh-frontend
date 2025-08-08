import { Component } from '@angular/core';
import { KpiCard } from '../kpi-card/kpi-card';
import { AttendanceCard } from '../attendance-card/attendance-card';
import { GraphCard } from '../graph-card/graph-card';

@Component({
  selector: 'app-dashboard-main',
  standalone: true,
  imports: [KpiCard, AttendanceCard, GraphCard],
  templateUrl: './dashboard-main.html',
  styleUrl: './dashboard-main.css'
})
export class DashboardMain {

}
