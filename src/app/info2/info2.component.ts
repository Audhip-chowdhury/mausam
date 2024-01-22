import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info2',
  templateUrl: './info2.component.html',
  styleUrl: './info2.component.css'
})
export class Info2Component {
  @Input() pressure_mb: any;
  @Input() wind_dir: any;
  @Input() gust: any;
  @Input() UV: any;
}
