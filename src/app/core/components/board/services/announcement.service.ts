import { Injectable } from '@angular/core';
import { Announcement } from '../models/announcement.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private announcements: Announcement[] = [
    { id: 1, title: 'Продам велосипед', description: 'Майже новий, червоний', date: new Date() },
    { id: 2, title: 'Шукаю репетитора з математики', description: 'Для учня 9 класу', date: new Date() },
  ];

  getAnnouncements(): Announcement[] {
    return this.announcements;
  }

  addAnnouncement(announcement: Announcement): void {
    this.announcements.push({ ...announcement, id: this.announcements.length + 1, date: new Date() });
  }
  constructor() { }
}
