import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, FormGroup, Validators } from '@angular/forms';
import { User } from '../Classes/User';
import { ConfirmedValidator } from '../functions/Confirmed.Validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

//   topics=["FaceBook","Twitter","Google"];
//   userModel=new User(
//                      '',
//                      '',
//                      '','',
//                      '',
// );
submitted = false;

  constructor(private fb:FormBuilder) { }

  registerForm=this.fb.group({
    firstName: ['',[Validators.required, Validators.minLength(5)]],
    lastName: ['', [Validators.required,Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
   
},{ 
  validator: ConfirmedValidator('password', 'confirmPassword')
});


  ngOnInit(): void {
  }

  // onSubmit(data: any)
  // {
  //   console.log(data)
  //   console.log(this.userModel);
  // }
   // convenience getter for easy access to form fields
   get f() { 
    return this.registerForm.controls; 
  }

  
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
     
      alert('done)\n\n' + JSON.stringify(this.registerForm.value))
  }
}

