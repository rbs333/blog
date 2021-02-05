import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { StripeService } from '../services/stripe.service';
import { FormBuilder } from '@angular/forms';

declare var Stripe;

@Component({
  selector: 'app-checkout-element',
  templateUrl: './checkout-element.component.html',
  styleUrls: ['./checkout-element.component.css']
})

export class CheckoutElementComponent implements OnInit {

  formGroup; 
  stripe;
  card;
  cardErrors;

  loading = false;
  confirmation;

  constructor(
    private stripeService: StripeService,
    private formBuilder: FormBuilder
  ) { 
    this.formGroup = this.formBuilder.group({
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      email: ""
    })
  }

  @Input() amount: number;
  @Input() description: string;
  @Input() image: string;
  @Input() productName: string;
  
  @ViewChild('cardElement', {static: true}) cardElement: ElementRef;


  ngOnInit() {
    this.stripe = Stripe('pk_test_mb4DV828Q51bpQcaR2r5e2VM00WCqphIst');
    const elements = this.stripe.elements();

    this.card = elements.create('card')
    this.card.mount(this.cardElement.nativeElement)

    this.card.addEventListener('change', ({error}) => {
      this.cardErrors = error && error.message;
    })
  }

  async handleForm(e, formData) {
    e.preventDefault();

    const { source, error } = await this.stripe.createSource(this.card);

    if (error) {
      this.cardErrors = error.message;
    }  else {
      this.loading = true;
      console.log("form", formData)
      this.stripeService.createCharge(
        {
          amount: this.amount, 
          currency: 'USD',
          stripeToken: source.id
        }
      ).subscribe((res) => {
        this.confirmation = res;
      });

      this.loading = false;
    }
  }
}
