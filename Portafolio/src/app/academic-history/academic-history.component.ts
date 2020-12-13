import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-academic-history',
  templateUrl: './academic-history.component.html',
  styleUrls: ['./academic-history.component.css']
})
export class AcademicHistoryComponent implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
  
}
