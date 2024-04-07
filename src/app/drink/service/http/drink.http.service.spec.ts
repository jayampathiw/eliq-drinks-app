import { TestBed } from '@angular/core/testing';

import { DrinkHttpService } from './drink.http.service';

describe('DrinkHttpService', () => {
  let service: DrinkHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
