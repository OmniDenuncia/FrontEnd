import { TestBed } from '@angular/core/testing';

import { PerfilService } from './perfil.service';

describe('PerfilService', () => {
  let service: PerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilService);
  });
  // https://www.testim.io/blog/testing-angular-services/
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
