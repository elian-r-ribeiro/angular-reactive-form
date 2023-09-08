import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email]),
  });

  sendInfo() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    } else {
      console.log(this.userForm.value);
      this.userForm.reset({
        name : (''),
        email : ('')
      })
    }
  }
}
