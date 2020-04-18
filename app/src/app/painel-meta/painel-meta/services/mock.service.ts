import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { DadosMock } from './mock-data';
import { DadosMockTr } from './mock-data-tr';
import { DadosMockC } from './mock-data-c';

@Injectable()
export class MockService {

  constructor() { }

  DadosMock(): Observable<any[]> {
    return of(DadosMock).pipe(
      delay(500)
    );
  }

  DadosMockTr(): Observable<any[]> {
    return of(DadosMockTr).pipe(
      delay(500)
    );
  }

  getColumns(): string[] {
    return ["Grupo", "Status", "Visualizar"]
  }

}
