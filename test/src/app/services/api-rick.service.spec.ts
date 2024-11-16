import { TestBed } from '@angular/core/testing';

import { ApiRickService } from './api-rick.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiRickService', () => {
  let service: ApiRickService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(ApiRickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
