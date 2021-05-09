import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { StripeService } from '../services/stripe.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment';

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
  mobile = window.screen.width > 800? false : true;
  isVenmo = this.mobile ? true : false;
  loading = false;
  confirmation;

  constructor(
    private stripeService: StripeService,
    public activeComponent: NgbActiveModal
  ) { 
    this.formGroup = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      state: new FormControl("", [Validators.required, 
                                  Validators.maxLength(2)]),
      zip: new FormControl("", [Validators.required,
                                Validators.minLength(5)]),
      venmoHandle: new FormControl("", Validators.required),
    })

    console.log(window.screen.width)
    console.log(this.mobile)
  }

  @Input() product: any;

  @ViewChild('cardElement', {static: true}) cardElement: ElementRef;


  ngOnInit() {
    this.stripe = Stripe(environment.PUBLIC_STRIPE_KEY);
    const elements = this.stripe.elements();

    this.card = elements.create('card')
    this.card.mount(this.cardElement.nativeElement)

    this.card.addEventListener('change', ({error}) => {
      this.cardErrors = error && error.message;
    })
  }

  get name() { return this.formGroup.get('name'); }
  get venmoHandle() { return this.formGroup.get('venmoHandle'); }
  get email() { return this.formGroup.get('email'); }
  get address() { return this.formGroup.get('address'); }
  get city() { return this.formGroup.get('city'); }
  get state() { return this.formGroup.get('state'); }
  get zip() { return this.formGroup.get('zip'); }

  togglePayment = () => {
    this.isVenmo = !this.isVenmo;
  };

  async handleForm(e, formData) {
    e.preventDefault();

    if (this.isVenmo || this.mobile) {
      // if venmo or mobile don't allow credit card
      formData.amount = this.product.amount;
      formData.date = Date();
      formData.id = formData.email;

      // post form with venmo handle for payment
      this.stripeService.postAddressInfo(formData)
          .subscribe(
            (res) => {
              this.confirmation = res;
              this.loading = false;
              this.activeComponent.dismiss();
              alert("Thank you! You should receive a venmo request soon :)")
          },
            error => {
              this.loading = false;
              this.activeComponent.dismiss();
              alert("Something went wrong :(")
            }
          );
    } else {
      // run credit card process
      const { source, error } = await this.stripe.createSource(this.card);

      if (error) {
        this.cardErrors = error.message;
      }  else {
        this.loading = true;

        // create charge
        this.stripeService.createCharge(
          {
            amount: this.product.amount, 
            currency: 'USD',
            stripeToken: source.id
          }
        ).subscribe(() => {
          // add amounts to form data
          formData.amount = this.product.amount;
          formData.date = Date();
          formData.id = formData.email;

          // if successful post information to DB
          this.stripeService.postAddressInfo(formData)
            .subscribe(
              (res) => {
                this.confirmation = res;
                this.loading = false;
                this.activeComponent.dismiss();
                alert("Thank you! Payment Received.")
            },
              error => {
                this.loading = false;
                this.activeComponent.dismiss();
                alert("Something went wrong :(")
              }
            );
        },
        error => {
          this.activeComponent.dismiss();
          alert("Something went wrong :(");
          this.loading = false;
        }
        )
      }
    }
  }
}
