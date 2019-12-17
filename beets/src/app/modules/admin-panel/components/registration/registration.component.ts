import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../../../services/user-registration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public MyForm: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private _authService: UserRegistrationService,
    private _route:Router) {
    this._createForm();
  }
  public registration():void{
    
    if(!this.MyForm.valid){
      
      return;
    }
    
    this._registrationByDefault();
    this._route.navigate(['/home',{}]);
    
  }
  private _createForm(): void {
    this.MyForm = this.fb.group({
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      email: [null, [Validators.email]],
      login: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      password: [null, [Validators.minLength(5), Validators.maxLength(20)]]
    });
  }
  private _registrationByDefault():void{
    const model = this.MyForm.value;
    this._authService.postUserDetail(model).subscribe();
    
  }

  ngOnInit() {
    
  }
}
