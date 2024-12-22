import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-board',
    imports: [AddAnnouncementComponent],
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoardComponent  {
  constructor(private modalService: NgbModal) {}

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
