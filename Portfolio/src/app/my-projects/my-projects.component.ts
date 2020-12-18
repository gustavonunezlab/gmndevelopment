import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
