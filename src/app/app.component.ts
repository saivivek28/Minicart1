import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MinicartComponent } from './minicart/minicart.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MinicartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment';
  
}
