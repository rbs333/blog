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
      "name": "Capable of Being Wrong T-shirt",
      "amount": "2500",
      "description": "T-shirt inspired by the song Smoke from Thank God for Monday",
      "image": "https://rbs-storage.s3.amazonaws.com/website+content/shirt-mock-blue.png",
      "isShirt": true
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
