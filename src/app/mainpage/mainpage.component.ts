import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-mainpage',
    imports: [CommonModule, FormsModule, NgbModalModule],
    templateUrl: './mainpage.component.html',
    styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  user = {
    login: '',
    rating: 4.5,
    location: '',
    status: '',
    description: '',
  };

  pet = {
    name: '',
    type: '',
    gender: '',
    description: '',
  };

  photoUrl: string | ArrayBuffer | null = null;

  constructor(private modalService: NgbModal) {}

  onPhotoSelected(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.photoUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }

  openAddPetModal(content: any) {
    this.modalService.open(content, { centered: true, backdrop: 'static' });
  }

  savePet() {
    // Логіка для збереження профілю улюбленця
    console.log('Pet saved:', this.pet);
  }
}