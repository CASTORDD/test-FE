import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';


import { AppComponent } from './app.component';

import { CarsComponent } from './components/cars/cars.component';

import { CarService } from './services/car.service';
import { SearchPipe } from './pipes/search.pipe';
import { OrderByPipe } from './pipes/order.pipe';
import { RangePipe } from './pipes/range.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    SearchPipe,
    OrderByPipe,
    RangePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NouisliderModule,
    NgxPaginationModule
  ],
  providers: [
  CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
