import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/modules/services/dishes.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  constructor(private service: DishesService) { }

  ngOnInit() {
    this.resetform();
  }

  resetform(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.formData = {

      id: 0,
      name: '',
      price: 0,
      categoryDishes: '',
      photo: ''

    }
  }
  onSubmit(form:NgForm){
    this.service.postDish(form.value).subscribe(
      res => {
        this.resetform(form);
      },
      err => {
        console.log(err);
      }
    )
  }
}
