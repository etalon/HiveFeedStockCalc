import { Injectable } from '@angular/core';
import { Part } from './part';
import { PARTS } from './mock-parts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor() { }

  getAll(): Observable<Part[]> {
    return of(PARTS);
  }

}
