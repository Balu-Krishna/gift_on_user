import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { locationInter } from '../_models/location';
import { LocationService } from '../_services/location.service';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
 
  myControl = new FormControl();

  locationData:locationInter []=[];

  CityData:locationInter []=[];

  filteredOptions!: Observable<locationInter []>;


  

  constructor(private _locationService :LocationService ) { }

  ngOnInit(): void {
    this._locationService.getLocation()
    .subscribe((data:locationInter) => {
      this.locationData = data.data
      console.log(this.locationData)
    });


    this._locationService.getCity()
    .subscribe((data:locationInter) => {
      this.CityData = data.data
    } );

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );

  }

  private _filter(value: string): locationInter []{
    const filterValue = value.toLowerCase();

    return this.CityData.filter(CityData => CityData.toLowerCase().includes(filterValue));
  }


}


