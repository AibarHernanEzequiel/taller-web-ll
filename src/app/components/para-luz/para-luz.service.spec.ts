import { TestBed } from '@angular/core/testing';

import { ParaLuzService } from './para-luz.service';

describe('ParaLuzService', () => {
  let service: ParaLuzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParaLuzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
