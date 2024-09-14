import { Component, OnInit } from '@angular/core';
import { HolidayserviceService } from './holidayservice.service';

@Component({
  selector: 'app-holidays-view',
  templateUrl: './holidays-view.component.html',
  styleUrls: ['./holidays-view.component.css']
})
export class HolidaysViewComponent implements OnInit {
  holidays: any[] = [];

  constructor(private holidaysService:  HolidayserviceService ) {}

  ngOnInit(): void {
    this.holidaysService.getHolidays().subscribe(data => {
      this.holidays = data;
    });

}
}