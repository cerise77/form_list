
import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {TitleService} from '.././service/http.service';
import {DataTitles} from '.././interface/data';
import { FormChildComponent } from ".././form-child/form-child.component";


@Component({
  selector: '',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [TitleService]
})
export class  MainComponent implements OnInit {

  titles: DataTitles[] = [];

  titlesForm: object = {'usernameInput': '', 'firstnameInput': '', 'lastnameInput': '', 'emailInput': '', 'typeInput': ''};

  surname: string = "";

  @ViewChild(FormChildComponent, {static: false}) private FormChild: FormChildComponent|undefined;

  
  constructor(private httpService: TitleService) {}

  
  ngOnInit(): void {

    this.httpService.getData().subscribe(
      {next: (data: DataTitles[]) => {this.titles = data}}
    )
  }


  callForm(){
    this.FormChild?.onAddForm();
  }


  callPerson(){
    this.FormChild?.onChangeForm();
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
