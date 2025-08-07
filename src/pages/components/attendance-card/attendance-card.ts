import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-attendance-card',
    standalone: true,
    imports: [],
    templateUrl: './attendance-card.html',
    styleUrl: './attendance-card.css'
})
export class AttendanceCard {
    private router = inject(Router);

    onSeeDetail() {
        this.router.navigate(['/dashboard/attendance']);
    }
}
