import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'range'
})

@Injectable()

export class RangePipe implements PipeTransform {
	
	transform(items: any[], attr, min, max): any {

				

    }
}