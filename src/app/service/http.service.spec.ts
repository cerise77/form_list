import { TestBed } from '@angular/core/testing';

import { TitleService } from './http.service';

describe('HttpService', () => {
  let service: TitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
