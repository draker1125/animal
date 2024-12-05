import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [AddAnnouncementComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'], // Виправлено на styleUrls
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BoardComponent {}

