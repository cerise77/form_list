import {Component, OnInit, ViewChild, ElementRef, Renderer2, EventEmitter, Output, Input} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {UsersService} from '.././service/user.service';
import { ConfirmPasswordValidator } from ".././validators/confirm_password.validator";
import {DataTitles} from '.././interface/data';

@Component({
  selector: 'app-form-change-child',
  templateUrl: './form-change-child.component.html',
  styleUrls: ['./form-change-child.component.css']
})
export class FormChangeChildComponent implements OnInit {

  myForm : FormGroup;
  submitted: boolean = false;
  
  // user:DataTitles[] = [];
  // newUser:DataTitles[] = [];
  
   
  @ViewChild('formChange', { static: false }) formChange!: ElementRef;
  @ViewChild('userName', { static: false }) userName!: ElementRef;
  @ViewChild('firstName', { static: false }) firstName!: ElementRef;
  @ViewChild('lastName', { static: false }) lastName!: ElementRef;
  @ViewChild('eMail', { static: false }) eMail!: ElementRef;
  @ViewChild('typeUser', { static: false }) typeUser!: ElementRef;
  
  @Input() userName1:string = "";
  @Output() userNameChange = new EventEmitter<string>();
  // @Input() userName1:DataTitles[] = [];
  // @Output() userNameChange = new EventEmitter<{usernameInput: string, firstnameInput: string, lastnameInput: string, emailInput: string, typeInput: boolean}>();
  onNameChange(model: string){
       
      this.userName1 = model;
      this.userNameChange.emit(model);
  }
  
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
  
  
  ngOnInit(): void {
    // this.userService.userData.subscribe((user: DataTitles[]) => {this.user = user;});
  }
  
  
  onCloseForm(){
    this.formChange.nativeElement.style.display = "none";
    this.submitted = false;
    this.myForm.reset();
  }
  
  
  onReset(){
    this.submitted = false;
    this.myForm.reset();
  }
  
  
  onSave(){
  
  }
  
  
  onChangeForm(){
    this.formChange.nativeElement.style.display = "block";
  }
  
}
