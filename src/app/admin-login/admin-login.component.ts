import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss',
})
export class AdminLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Admin Login:', username, password);
      // Vous pouvez ici appeler un service d'authentification.
    } else {
      console.error('Formulaire invalide');
    }
  }
}
