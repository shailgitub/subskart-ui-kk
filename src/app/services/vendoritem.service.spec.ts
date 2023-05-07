import { TestBed } from '@angular/core/testing';

import { VendoritemService } from './vendoritem.service';

describe('VendoritemService', () => {
  let service: VendoritemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendoritemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
