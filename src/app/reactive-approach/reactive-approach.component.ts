import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css']
})
export class ReactiveApproachComponent implements OnInit {

//i am teling to ts compiler . i am griving the promise 
// registrationForm it would ' be undefined . it will definaly contain some value....



// 1. form group --> collection of form controls

// Map the formgroup object with the form element in html

  registrationForm !: FormGroup;

  //routing
  // case studu
  // Required : you need to maintain the data..
  ngOnInit(): void {

      this.registrationForm = new FormGroup({
            'userFirstname' : new FormControl('' , [Validators.required , Validators.minLength(3)]),
            'useremail  ' : new FormControl('' , [Validators.required , Validators.minLength(3) , Validators.email]),
            'userPassword' : new FormControl('' , [Validators.required , Validators.minLength(6)]),
            'userchoice' : new FormControl('' , [Validators.required ])   ,
            'userphonenumber' : new FormControl('' , [Validators.required , Validators.pattern('[0-9]{10}')]),
            'usercompanymailid' : new FormControl('' , [Validators.required , 
                                    Validators.pattern('^[a-zA-Z0-9._%+\\-]+@misard\.com$')  ])

      })  
  }


  evtClick(){
      console.log(this.registrationForm);
  }


}
