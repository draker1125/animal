import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 49.8397, lng: 24.0297 }, // Координати для Львова
      zoom: 12,
    };

    // Ініціалізуємо карту
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);
  }
}
