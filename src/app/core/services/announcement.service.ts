import { Injectable } from '@angular/core';
import { Announcement } from '../models/announcement.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private announcements: Announcement[] = [];

  getAnnouncements(): Announcement[] {
    return this.announcements;
  }

  addAnnouncement(announcement: Announcement): void {
    this.announcements.push(announcement);
  }
}
