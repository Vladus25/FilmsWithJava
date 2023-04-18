import { TestBed } from '@angular/core/testing';

import { SpringConnectionService } from './spring-connection.service';

describe('SpringConnectionService', () => {
  let service: SpringConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
