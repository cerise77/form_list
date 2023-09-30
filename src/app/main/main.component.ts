
import {Component, OnInit, ViewChild, Input, ElementRef} from '@angular/core';
import {TitleService} from '.././service/http.service';
import {DataTitles} from '.././interface/data';
import { FormChildComponent } from ".././form-child/form-child.component";
import { FormChangeChildComponent } from ".././form-change-child/form-change-child.component";


@Component({
  selector: '',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [TitleService]
})
export class  MainComponent implements OnInit {

  titles: DataTitles[] = [];

  @ViewChild(FormChildComponent, {static: false}) private FormChild: FormChildComponent|undefined;
  @ViewChild(FormChangeChildComponent, {static: false}) private FormChangeChild: FormChangeChildComponent|undefined;

  
  constructor(private httpService: TitleService) {}

  
  ngOnInit(): void {

    this.httpService.getData().subscribe(
      {next: (data: DataTitles[]) => {this.titles = data}}
    )
  }


  callForm(){
    this.FormChild?.onAddForm();
  }


  callPerson(model:any){
    this.FormChangeChild?.onChangeForm();
  }


  onContentAdded(contentData: {usernameInput: string, firstnameInput: string, lastnameInput: string, emailInput: string, typeInput: boolean}) {
    this.titles.push({
      username: contentData.usernameInput,
      firstname: contentData.firstnameInput,
      lasttname: contentData.lastnameInput,
      email: contentData.emailInput,
      typeuser: contentData.typeInput
    });


  }


}
