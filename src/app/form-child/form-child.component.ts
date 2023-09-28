import {Component, OnInit, ViewChild, ElementRef, Renderer2, EventEmitter, Output, Input} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {UsersService} from '.././service/user.service';
import {DataTitles} from '.././interface/data';
import { ConfirmPasswordValidator } from ".././validators/confirm_password.validator";

@Component({
  selector: 'app-form-child',
  templateUrl: './form-child.component.html',
  styleUrls: ['./form-child.component.css']
})
export class FormChildComponent implements OnInit {

myForm : FormGroup;
submitted: boolean = false;


@Output() contentCreated = new EventEmitter<{usernameInput: string, firstnameInput: string, lastnameInput: string, emailInput: string, typeInput: boolean}>();

@ViewChild('form', { static: false }) formTemplate!: ElementRef;
@ViewChild('userName', { static: false }) userName!: ElementRef;
@ViewChild('firstName', { static: false }) firstName!: ElementRef;
@ViewChild('lastName', { static: false }) lastName!: ElementRef;
@ViewChild('eMail', { static: false }) eMail!: ElementRef;
@ViewChild('typeUser', { static: false }) typeUser!: ElementRef;

@ViewChild('buttonCreate', { static: false }) buttonCreate!: ElementRef;



constructor(private renderer: Renderer2, private userService: UsersService) {    
  this.myForm = new FormGroup({       
    "userName": new FormControl("", Validators.required),
    "firstname": new FormControl("", Validators.required),
    "lastname": new FormControl("", Validators.required),
    "userEmail": new FormControl("", [Validators.required, Validators.email]),
    "typeUser": new FormControl("", Validators.required),
    "password": new FormControl("", [Validators.required, Validators.pattern("^[A-Za-z]{8,}$")]),
    "confirmPassword": new FormControl("", [Validators.required]),
},
    {
      validators: [ConfirmPasswordValidator('password', 'confirmPassword')],
    }); }


ngOnInit(): void {}


onAddPage() {

  this.submitted = true;

  this.contentCreated.emit({
    usernameInput: this.userName.nativeElement.value,
    firstnameInput: this.firstName.nativeElement.value,
    lastnameInput: this.lastName.nativeElement.value,
    emailInput: this.eMail.nativeElement.value,
    typeInput: this.typeUser.nativeElement.value
  });
}


onCloseForm(){
  this.formTemplate.nativeElement.style.display = "none";
  this.submitted = false;
  this.myForm.reset();
}


onAddForm(){
  this.formTemplate.nativeElement.style.display = "block";
}

}
