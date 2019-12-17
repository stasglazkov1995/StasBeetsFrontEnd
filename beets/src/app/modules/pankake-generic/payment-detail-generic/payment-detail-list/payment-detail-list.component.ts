import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../../services/payment-detail.service';
import { PaymentDetail } from '../../../models/payment-detail.model';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {

  public creditDetail : PaymentDetail[];
  
  constructor(private service:PaymentDetailService) {
    this.service.getUsers().subscribe((result : PaymentDetail[]) =>{
      this.creditDetail = result;
      console.log(this.creditDetail);
    });
   }

  ngOnInit() {
  }

}
