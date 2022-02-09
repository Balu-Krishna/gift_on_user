import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { offersInterface } from '../_models/offers';

@Injectable({
  providedIn: 'root'
})
export class OffersService {


  constructor(private _http: HttpClient) { }

  private _Url = "http://34.233.43.193:5800/v1/purchaser/offers/alloffers";


  getOffers():Observable<offersInterface>{
 
    return this._http.get<offersInterface>(this._Url);
    
  }
}
