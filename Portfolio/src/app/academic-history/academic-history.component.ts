import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Asignatura } from '../models/asignatura';

@Component({
  selector: 'app-academic-history',
  templateUrl: './academic-history.component.html',
  styleUrls: ['./academic-history.component.css']
})
export class AcademicHistoryComponent implements OnInit {

  
  constructor(
    private readonly location: Location,
    private asignaturas: Asignatura[]

  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
  
}
