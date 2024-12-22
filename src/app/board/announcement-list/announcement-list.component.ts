import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../../../models/announcement.model';


@Component({
    selector: 'board-announcement-list',
    imports: [CommonModule],
    template: './an',
    templateUrl: './announcement-list.component.html',
    styleUrl: './announcement-list.component.css'
})
export class BoardAnnouncementListComponent implements OnInit {
  announcements: Announcement[] = [];

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit() {
    this.announcements = this.announcementService.getAnnouncements();
  }
}
