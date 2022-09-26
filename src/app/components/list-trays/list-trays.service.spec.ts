import { TestBed } from '@angular/core/testing';

import { ListTraysService } from './list-trays.service';

describe('ListTraysService', () => {
  let service: ListTraysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTraysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
