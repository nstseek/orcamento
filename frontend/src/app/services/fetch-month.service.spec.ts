import { TestBed } from '@angular/core/testing';

import { FetchMonthService } from './fetch-month.service';

describe('FetchMonthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchMonthService = TestBed.get(FetchMonthService);
    expect(service).toBeTruthy();
  });
});
