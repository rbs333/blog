import { Component, OnInit, Input, HostListener } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      // todo: figure out secure way of storing this. 
      key: '',
      image: 'some-image',
      locale: 'auto',
      source: async (source) => {
        this.loading = true;
        // call lambda here
        const lambda_fun = async (params) => {
          //do lambda things charge the card
          console.log("in the mock lambda", params.amount)
        };

        this.confirmation = await lambda_fun({amount: this.amount, source: source.id});
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
