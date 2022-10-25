import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

fdescribe('UserService', () => {
  let service: UserService;

  const httpStub: Partial<HttpClient> ={
    get: () => of([ 
      {
      "name": "Joao da Silva",
      "cpf": "26899337649",
      "phone": "4233335555",
      "email": "joao@joaosilva.com.br"
      }]
      )
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
