import { TestBed } from '@angular/core/testing';

import { VendorpaymentService } from './vendorpayment.service';

describe('VendorpaymentService', () => {
  let service: VendorpaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorpaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
