import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const LAMBDA_URL: string = 'https://2i3njz15if.execute-api.us-east-1.amazonaws.com/prod/'

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

    console.log("in service", body)

    return this.http.post(LAMBDA_URL + "charge", body, httpOptions)
  }
}
