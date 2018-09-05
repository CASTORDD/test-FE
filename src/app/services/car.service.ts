import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarService {

	constructor(private _http: Http){

	}
	
	private url:string = "http://localhost:3000/cars";

	getCars(){
		return this._http.get(this.url).map((resposne: Response) => resposne.json())
	}	
}