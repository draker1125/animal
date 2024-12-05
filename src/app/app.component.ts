import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from './core/components/board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardComponent],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'], 
})
export class AppComponent {
  title = 'Animalis';
}
