import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info3',
  templateUrl: './info3.component.html',
  styleUrl: './info3.component.css'
})
export class Info3Component {
  @Input() humidity: any;
  @Input() wind_kph: any;
  @Input() temp: any;
  @Input() feels: any;
}
