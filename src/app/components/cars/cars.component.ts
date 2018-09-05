import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Car } from '../../Car';
import { CarService } from '../../services/car.service';

@Component({
	selector: 'cars-list',
	templateUrl: './cars.component.html',
	providers: [ CarService]
})

export class CarsComponent implements OnInit, OnChanges {

	cars = [];
	public car = Car;
	public busqueda;
	public someRange: number[] = [5000, 30000];
	public nCars = 0;
	public format = "block";

	public order = "date";
	public ascending = true;
	public orderCars = "";
		
	constructor(
		private _carService: CarService
	) {

		if(this.order == 'date' ){
			this.ascending = false;
		} else {
			
			this.ascending = false;
			
		}
	}

	ngOnInit(){
		this._carService.getCars().subscribe(responseCar => this.cars = responseCar);
	}

	ngOnChanges() {
	}

}