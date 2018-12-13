import { TestBed } from '@angular/core/testing';

import { ProcessiService } from './processi.service';

describe('ProcessiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessiService = TestBed.get(ProcessiService);
    expect(service).toBeTruthy();
  });
});
