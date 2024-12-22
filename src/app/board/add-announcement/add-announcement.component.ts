import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnnouncementService } from '../services/announcement.service';

@Component({
    selector: 'app-board-add-announcement',
    imports: [CommonModule, FormsModule],
    templateUrl: './add-announcement.component.html',
    styleUrl: './add-announcement.component.css'
})
export class AddAnnouncementComponent {
  title = '';
  description = '';

  constructor(private announcementService: AnnouncementService) {}

  addAnnouncement(): void {
    this.announcementService.addAnnouncement({
      id: Date.now(),
      title: this.title,
      description: this.description,
      
    });
    this.title = '';
    this.description = '';
  }
}




