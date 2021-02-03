import { Component, OnInit, Input, HostListener } from '@angular/core';
import { StripeService } from '../services/stripe.service';

// import types if desire to strong type
declare var StripeCheckout;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  @Input() amount;
  @Input() description;

  handler: any;
  confirmation: any;
  loading = false;

  constructor(private stripeService: StripeService) { }

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      // todo: figure out secure way of storing this. 
      key: '',
      locale: 'auto',
      source: async (source) => {
        console.log(source)
        this.loading = true;

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
    })
  }

  //open handler when someone clicks a button
  async checkout(e) {
    this.handler.open({
      name: 'VirginiaBoyInc Store',
      description: this.description,
      amount: this.amount
    });
    e.preventDefault();
  }

  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close();
  }

}
