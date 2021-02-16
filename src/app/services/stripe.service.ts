import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const STRIPE_LAMBDA_URL: string = 'https://2i3njz15if.execute-api.us-east-1.amazonaws.com/prod/';
const LAMBDA_URL: string = 'https://aq9j0pujd0.execute-api.us-east-1.amazonaws.com/beta/';

@Injectable({
  providedIn: 'root'
})

export class StripeService {

  constructor(private http: HttpClient) { };

  createCharge(body: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(STRIPE_LAMBDA_URL + "charge", body, httpOptions)
  }

  postAddressInfo(body: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(LAMBDA_URL + "order", body, httpOptions)
  }
}
