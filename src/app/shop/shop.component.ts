import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products = [
    {
      "name": "BobbyCake's Famous Pancake Mix",
      "amount": "1500",
      "description": "A pancake tradition forged over years of pancakes Saturdays. An order ships with 64oz of mix!",
      "image": ""
    },
    {
      "name": "Capable of Being Wrong T-shirt",
      "amount": "2500",
      "description": "T-shirt inspired by the song Smoke from Thank God for Monday",
      "image": ""
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
