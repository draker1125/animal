import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavigComponent } from "./navig/navig.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterModule, NavigComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animalis';
}
