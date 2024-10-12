import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  isSlideOut = true;

  constructor(private router: Router, private snackbar: MatSnackBar) {}

  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }

  onDashboard() {
    this.router.navigate(['/budger-planner/dashboard']);
  }

  onProfile() {
    this.router.navigate(['/budger-planner/profile']);
  }

  onPreviousHistory() {
    this.router.navigate(['/budger-planner/history']);
  }

  onLogOut() {
    this.router.navigate(['/budger-planner/login']);
  }

}
