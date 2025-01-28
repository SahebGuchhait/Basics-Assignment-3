import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showDetails = false; // Track visibility of the paragraph
  log: { count: number; timestamp: Date }[] = []; // Log array for button clicks

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.log.push({ count: this.log.length + 1, timestamp: new Date() });
  }
}
