import { TestBed } from '@angular/core/testing';

import { QuickTransferService } from './quick-transfer.service';

describe('QuickTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuickTransferService = TestBed.get(QuickTransferService);
    expect(service).toBeTruthy();
  });
});
