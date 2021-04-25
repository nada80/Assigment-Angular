import { TestBed } from '@angular/core/testing';

import { UserServicesServiceService } from './user-services-service.service';

describe('UserServicesServiceService', () => {
  let service: UserServicesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServicesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
