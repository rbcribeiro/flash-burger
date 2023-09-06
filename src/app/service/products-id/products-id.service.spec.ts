import { TestBed } from '@angular/core/testing';

import { ProductsIdService } from './products-id.service';

describe('ProductsIdService', () => {
  let service: ProductsIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
