import { Injectable } from '@angular/core';
import { PaymentDetail } from '../models/payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootURL = 'https://localhost:44378/api';
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail(formData: PaymentDetail) {
    return this.http.post(this.rootURL + '/PaymentDetail/AddPaymentDetail', formData);
  }
  getUsers() {
    return this.http.get(this.rootURL + '/PaymentDetail/all');
  }
}
