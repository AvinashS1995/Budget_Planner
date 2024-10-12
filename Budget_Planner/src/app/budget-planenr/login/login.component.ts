import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: any
  registerForm: any
  activeForm:'login' | 'register' = 'login'

  constructor(private fb: FormBuilder, private router: Router, private snackbar: MatSnackBar) {}


  ngOnInit():void {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    })

    this.registerForm = this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required],
      confirmPassword:['',Validators.required]


      
    })
  }

  toggleForm(form:'login' | 'register') {
    this.activeForm = form;
  }
  
  onLoginFormSubmit() {
    if (this.loginForm.valid) {
      console.log("Login Form:", this.loginForm.value);
      this.router.navigate(['/budger-planner/dashboard']);
    } else {
      this.snackbar.open('Invalid Email Or Password!', 'Close', { duration:3000 })
    }
  }

  onRegisterFormSubmit() {
    if (this.registerForm.valid) {
      console.log("Register Form:", this.registerForm.value);
      setTimeout(() => {
        window.location.reload()
      }, 2000);
      this.router.navigate(['/budger-planner/login']);
    } else {
      this.snackbar.open('Please Fill In All Fields Correctly in  Email Or Password!', 'Close', { duration:3000 })
    }
  }
}
