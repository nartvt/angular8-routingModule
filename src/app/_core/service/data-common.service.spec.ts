import { TestBed } from '@angular/core/testing';

import { DataCommonService } from './data-common.service';

describe('DataCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCommonService = TestBed.get(DataCommonService);
    expect(service).toBeTruthy();
  });
});
