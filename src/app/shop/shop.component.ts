import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutElementComponent } from '../checkout-element/checkout-element.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products = [
    {
      "name": "Bobby's Famous Pancake Mix",
      "amount": "1500",
      "description": "A pancake tradition forged over years of pancakes Saturdays. An order ships with 64oz of mix!",
      "image": "https://rbs-storage.s3.amazonaws.com/website+content/pancake_pic.jpg",
      "isShirt": false
    },
    {
      "name": "Bobby's Famous Pancake Mix",
      "amount": "500",
      "description": "NO SHIPPING EDITION - Enjoy A pancake tradition forged over years of pancakes Saturdays. An order ships with 64oz of mix! Here's the rub: To put pancake mix in a box and ship it to you, my dear fellow pancake lover, would cost me around $12. So instead of inflating the price for shipping, buy it for cheap and the next time I play a show around your area I'll bring it to you in person! If I don't pay for shipping - you don't pay for shipping!! Everybody wins!!!",
      "image": "https://rbs-storage.s3.amazonaws.com/website+content/pancake_pic.jpg",
      "isShirt": false
    }
  ]

  modalRef: NgModel;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(product) {
    const modalRef = this.modalService.open(CheckoutElementComponent);
    modalRef.componentInstance.product = product;
    modalRef.componentInstance.modalService = this.modalService;
  }
}
