import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  form = {
    "address": {
      "line1": "",
      "line2": "",
      "city": "",
      "zip": ""
    },
    "name": "",
    "email": "",
    "size": "",
  }
  constructor() { }

  ngOnInit() {
  }

}
