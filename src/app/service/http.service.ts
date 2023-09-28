import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DataTitles} from '../interface/data';

@Injectable()
export class TitleService {

  constructor(private http: HttpClient) { }

  getData(): Observable<DataTitles[]> {
    return this.http.get<DataTitles[]>('assets/table.json');
  }

}
