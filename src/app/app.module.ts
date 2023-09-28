import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import {TitleService} from './service/http.service';
import { FormChildComponent } from './form-child/form-child.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {UsersService} from './service/user.service';
import { FormChangeChildComponent } from './form-change-child/form-change-child.component';

const appRoutes: Routes =[
  { path: '', component: MainComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormChildComponent,
    NotFoundComponent,
    FormChangeChildComponent
  ],
  providers: [TitleService, UsersService],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
