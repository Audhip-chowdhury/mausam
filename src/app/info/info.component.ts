import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  @Input() humidity: any;
  @Input() wind_kph: any;
  @Input() temp: any;
  @Input() feels: any;
}
