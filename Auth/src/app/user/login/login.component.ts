import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public formBuilder:FormBuilder
    ,public service:AuthService,private router:Router){}

  form!:FormGroup;
  isSubmited=false;

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    } )
  }


  onSubmit(){
    
    this.isSubmited=true;
    if(this.form.valid)
      {
        this.service.login(this.form.value).subscribe({
          next:(res:any)=>{
             localStorage.setItem('token',res.token);
             this.router.navigateByUrl('/home')

          },
          error:(err)=> {
            if(err.status==400){console.log("wrong email or password")}
            else
            console.log(err);
            
          },
        })
      }
      else console.log("form in valid")
  }


  hasDisplayMessage(controlName:string):Boolean{
    const control=this.form.get(controlName);
    return Boolean(control?.invalid)&&
    (this.isSubmited || Boolean(control?.touched))
  }









}
