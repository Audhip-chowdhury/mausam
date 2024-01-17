import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  production = false
  weatherApiBaseUrl = 'http://api.weatherapi.com/v1/current.json'
  apiKey = '1651b7b63e11404d95d54519241701'

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    return this.http.get(this.weatherApiBaseUrl, {
      params: {
        q: cityName,
        key: this.apiKey,
        aqi: 'no'
      }
    })
  }
}
