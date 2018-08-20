import { TestBed, inject } from '@angular/core/testing';

import { ConfigLoaderService } from './config-loader.service';

describe('ConfigLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigLoaderService]
    });
  });

  it('should be created', inject([ConfigLoaderService], (service: ConfigLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
