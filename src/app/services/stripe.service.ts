import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as config from '../../../config.json';

const STRIPE_LAMBDA_URL: string = config.charge_url;
const LAMBDA_URL: string = config.api_url;

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

    return this.http.post(STRIPE_LAMBDA_URL + "/charge", body, httpOptions)
  }

  postAddressInfo(body: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post(LAMBDA_URL + "/order", body, httpOptions)
  }
}
