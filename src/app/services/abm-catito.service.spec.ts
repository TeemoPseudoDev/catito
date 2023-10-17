import { TestBed } from '@angular/core/testing';

import { AbmCatitoService } from './abm-catito.service';

describe('AbmCatitoService', () => {
  let service: AbmCatitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbmCatitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
