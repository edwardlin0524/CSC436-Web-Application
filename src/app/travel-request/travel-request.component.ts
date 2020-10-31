import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export class TravelRequest {
  public name: string;
  public origination: string;
  public destination: string;
  public departureDate: Date;
  public returnDate: Date;
  public numberOfTravelers: number;
  public totalCost: number;
}

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.css']
})


export class TravelRequestComponent implements OnInit {

  constructor() { }
  model = new TravelRequest();
  AirportCodes: string[] = [
    'ORD',
    'TPE',
    'TYO',
    'LHR',
    'YVR'
  ];
  ngOnInit(): void {
  }
  onSubmit(f: NgForm): void {
    this.model.totalCost = f.value.numberOfTravelers * 150;
    console.log(this.model.totalCost);
  }
}
