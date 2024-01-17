import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info2',
  templateUrl: './info2.component.html',
  styleUrl: './info2.component.css'
})
export class Info2Component {
  @Input() humidity: any;
  @Input() wind_kph: any;
  @Input() temp: any;
  @Input() feels: any;
}
