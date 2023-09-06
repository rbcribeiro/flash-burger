import { TestBed } from '@angular/core/testing';

import { OrdersIdService } from './orders-id.service';

describe('OrdersIdService', () => {
  let service: OrdersIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
