import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../../services/payment-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service:PaymentDetailService) { }

  ngOnInit() {
    this.resetform();
  }

  resetform(form?:NgForm){
    if(form != null)
      form.resetForm();
    
    this.service.formData ={
      PMid : 0,
      CardOwnerName : '',
      CardNumber : '',
      ExpirationDate : '',
      CVV : ''
    }
  }

  onSubmit(form:NgForm){
    this.service.postPaymentDetail(form.value).subscribe(
      res => {
        this.resetform(form);
      },
      err => {
        console.log(err);
      }
    )
    // console.log(form.value);
  }
}
