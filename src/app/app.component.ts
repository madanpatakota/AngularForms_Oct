import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularForms_Oct';

  optionsList = [
    {
      name: 'Yes',
      value: 1,
    },
    {
      name: 'No',
      value: 2,
    },
  ];

  btnClick(registrationForm: NgForm) {
    console.log(registrationForm);

     //How  you are going to capture the data of the registration form


     // code i have to wreite -- In


     //Notes
     //registration is a NGFrom
     //registrationForm.form i got the FormGroup
     //registrationForm.form.controls  -- I got all the form controls
     //registrationForm.form.controls["firstname"] -- I got the form control of firstname
     //registrationForm.form.controls["firstname"].value -- I got the value of the form control of firstname


    let firstname = registrationForm.form.controls["firstname"].value;
 //'Robert JOhn adfasdasfdasfdbaskjfdbsalkfdabskjfdbsa;kfdasbfdkba'
    let ccName    = registrationForm.form.controls["CountryCodeName"].value;


    //i can caputre the values.

  }
}
