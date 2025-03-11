import { TestBed } from '@angular/core/testing';

import { ManageAppTableService } from './manage-app-table.service';

describe('ManageAppTableService', () => {
  let service: ManageAppTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageAppTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
