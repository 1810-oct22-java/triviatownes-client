import { TestBed } from '@angular/core/testing';

import { WaitingService } from './waiting.service';

describe('WaitingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaitingService = TestBed.get(WaitingService);
    expect(service).toBeTruthy();
  });
});
