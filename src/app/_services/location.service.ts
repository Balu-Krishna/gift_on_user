import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { locationInter } from '../_models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private _httpLocation: HttpClient,private _httpCity: HttpClient) { }
 
  private _LocationUrl = "http://34.233.43.193:5800/v1/purchaser/home/country";

  private _CityUrl = "http://34.233.43.193:5800/v1/purchaser/home/popularcities";

  getLocation():Observable<locationInter>{
   return this._httpLocation.get<locationInter>(this._LocationUrl);
  }

  getCity():Observable<locationInter>{
    return this._httpCity.get<locationInter>(this._CityUrl);
  }

}
