import { TestBed, inject } from '@angular/core/testing';

import { MockDatenService } from './mock-daten.service';

describe('MockDatenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockDatenService]
    });
  });

  it('should ...', inject([MockDatenService], (service: MockDatenService) => {
    expect(service).toBeTruthy();
  }));
});
