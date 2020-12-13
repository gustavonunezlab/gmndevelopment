import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-development-tools',
  templateUrl: './development-tools.component.html',
  styleUrls: ['./development-tools.component.css']
})
export class DevelopmentToolsComponent implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
