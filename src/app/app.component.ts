import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'mausam_weather';
  location=""
  humidity = 0;
  wind_kph = 0;
  temp =0;
  feels =0;
  time="00:00 AM";
  isDay=true;
  page=1;
  showFBForm = false;
  pressure_mb = 0;
  wind_dir = 0;
  gust = 0;
  UV = 0;
  constructor(private weatherService: WeatherService)
  {
    
  }
  
  getAll(cityName = 'Dhaka') {
    this.weatherService.getWeatherData(cityName).subscribe((data: any) => {
      console.log(data);
      this.location = data.location.name;
      this.humidity = data.current.humidity;
      this.wind_kph = data.current.wind_kph;
      this.temp = data.current.temp_c;
      this.feels = data.current.feelslike_c;
      this.time = new Date().toLocaleTimeString('en-US', { timeZone: data.location.tz_id, hour: '2-digit', minute:'2-digit' })
      this.isDay = data.current.is_day;
      this.pressure_mb = data.current.pressure_mb;
      this.wind_dir = data.current.wind_dir;
      this.gust = data.current.gust_mph;
      this.UV = data.current.uv;



    })
  }

  ngOnInit() {
    this.getAll()
  }

  onClick(cityName: string) {
    this.getAll(cityName)
  }

  changePage(page: any) {
    this.page = page;
    console.log(this.page)
  }

  toggleFbForm() {
    this.showFBForm = !this.showFBForm;
  }
}
