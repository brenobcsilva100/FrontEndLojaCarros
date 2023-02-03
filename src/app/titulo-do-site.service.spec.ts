import { TestBed } from '@angular/core/testing';

import { TituloDoSiteService } from './titulo-do-site.service';

describe('TituloDoSiteService', () => {
  let service: TituloDoSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TituloDoSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
