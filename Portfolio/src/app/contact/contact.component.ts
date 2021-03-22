import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacto!: FormGroup;
  submitted = false;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.contacto = new FormGroup({
      nya: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      asunto: new FormControl('', Validators.required),
      mensaje: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  get f() { return this.contacto.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.contacto.invalid) {
      return;
    }

    alert('Mensaje Enviado !')
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
