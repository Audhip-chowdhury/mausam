import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'mausam_weather';
  humidity = 0;
  wind_kph = 0;
  constructor(private weatherService: WeatherService)
  {

  }
  ngOnInit(): void {
    this.weatherService.getWeatherData('Dhaka').subscribe((data: any) => {
      console.log(data);
      this.humidity = data.current.humidity;
      this.wind_kph = data.current.wind_kph;
    })
  }
}
