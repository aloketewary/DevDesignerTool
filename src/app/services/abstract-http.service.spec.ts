import { TestBed, inject } from '@angular/core/testing';

import { AbstractHttpService } from './abstract-http.service';

describe('AbstractHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractHttpService]
    });
  });

  it('should be created', inject([AbstractHttpService], (service: AbstractHttpService) => {
    expect(service).toBeTruthy();
  }));
});
