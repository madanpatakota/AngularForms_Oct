import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-approach',
  templateUrl: './template-approach.component.html',
  styleUrls: ['./template-approach.component.css']
})
export class TemplateApproachComponent {
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



     // Hari and charan


     // if i am going to check the element wheater that is on which can kind of condition


     // charan : 6 status 
     // v , inv  
     // d , p
     // t , un


    // elementAt

     


     // by default element 
     // pri , valid , untouched



     // how many ways you are going to make sure that element is valid or invalid
     // requird


     //Notes
     //registration is a NGFrom
     //registrationForm.form i got the FormGroup
     //registrationForm.form.controls  -- I got all the form controls
     //registrationForm.form.controls["firstname"] -- I got the form control of firstname
     //registrationForm.form.controls["firstname"].value -- I got the value of the form control of firstname

    //  object   ngForm

    // registrationForm.form -- FormGroup

    // registrationForm.form.controls["firstname"] -- FormControl

    let firstname = registrationForm.form.controls["firstname"].value;
 //'Robert JOhn adfasdasfdasfdbaskjfdbsalkfdabskjfdbsa;kfdasbfdkba'
    let ccName    = registrationForm.form.controls["CountryCodeName"].value;


    //i can caputre the values.

}

}