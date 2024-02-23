import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [	
    AppComponent,
      CalendarComponent
   ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
