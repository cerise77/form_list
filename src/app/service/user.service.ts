import { Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DataTitles} from '.././interface/data';

@Injectable()
export class UsersService{

  constructor(){}
  
  private user = new BehaviorSubject<DataTitles[]>([]);

  // userDataSource: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  userData = this.user.asObservable();

  updateUserData(data: DataTitles[]) {
    this.user.next(data);
  }

}