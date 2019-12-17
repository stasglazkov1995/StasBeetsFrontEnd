import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public returnUrlString:string;
  public submited = false;
  public loading = false;
  public MyForm: FormGroup;
  // model: any = {};
  // errorMessage:string;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private _loginService : LoginService,
    private fb: FormBuilder
    ) {
      // this._createForm();
      if(this._loginService.currentUser){
        this.router.navigate(['/admin-main-page']);
      }
     }

  ngOnInit() {
   
    this.returnUrlString = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public login(){
    this.submited = true;
    if(!this.MyForm.valid){
      return
    }
    this.loading = true;
    const model = this.MyForm.value;
    this._loginService.Login(model)
    .pipe(first())
    .subscribe(data=>{
      this.router.navigate([this.returnUrlString]);
    },
    error=>{
      this.loading = false;
    })
  }
  // public login():void{
  //   if(!this.MyForm.valid){
  //     return
  //   }
  //   this._login();
  //   this.router.navigate(['/admin-main-page']);  
  // }

  // private _login():void{   
  //   const model = this.MyForm.value; 
  //   // debugger;    
  //   this._loginService.Login( model).subscribe();    
  // };    

  // private _createForm():void{
  //   this.MyForm = this.fb.group({
  //     login: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
  //     password: [null, [Validators.minLength(5), Validators.maxLength(20)]]
  //   })
  // }
}
