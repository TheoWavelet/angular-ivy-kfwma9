import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class AppService {
  public getGridData(): Observable<any[]> {
    return of(data);
  }
}

export type DataModel = {
  id: number;
  name: string;
  status: 'ACTIVE' | 'DISABLED';
};

const data: DataModel[] = [
  {
    id: 1057,
    name: 'avery.hoppe',
    status: 'ACTIVE',
  },
  {
    id: 1071,
    name: 'carlo.corwin',
    status: 'ACTIVE',
  },
  {
    id: 1076,
    name: 'carolee.kuphal',
    status: 'ACTIVE',
  },
  {
    id: 1017,
    name: 'carroll.feil',
    status: 'DISABLED',
  },
  {
    id: 1022,
    name: 'dgdg',
    status: 'DISABLED',
  },
];
const statusTranslations = {
  ACTIVE: 'აქტიური',
  DISABLED: 'გაუქმებული',
};

