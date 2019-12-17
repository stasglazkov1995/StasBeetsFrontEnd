import { Component, OnInit } from '@angular/core';
import { IngredientnService } from 'src/app/modules/services/ingredientn.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  constructor(private service:IngredientnService) { }

  ngOnInit() {
    this.resetform();
  }

  resetform(form?:NgForm){
    if(form != null)
      form.resetForm();
    
    this.service.formData ={
      
      name : '',
      price : 0,
      category : ''
      
    }
  }
  onSubmit(form:NgForm){
    this.service.postIngredient(form.value).subscribe(
      res => {
        this.resetform(form);
      },
      err => {
        console.log(err);
      }
    )
  }
}
