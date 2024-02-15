import { TestBed } from '@angular/core/testing';

import { SheardApiService } from './sheard-api.service';

describe('SheardApiService', () => {
  let service: SheardApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheardApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
