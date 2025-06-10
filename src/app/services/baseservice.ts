import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { BrnAlertDialogContentDirective, BrnAlertDialogTriggerDirective } from '@spartan-ng/brain/alert-dialog';
import { catchError, forkJoin, map, Observable, tap, throwError } from 'rxjs';
import { ROOMS_MOCK_DATA } from '../mock/rooms-mock-data';

@Injectable({
  providedIn: 'root',
})
export class Baseservice {
  private readonly apiUrl = `${environment.apiUrl}`;

  // constructor(private http: HttpClient) {}

  cadastrar(endpoint: string, data: any): any {
    const url = `${this.apiUrl}/${endpoint}/`;
  }


  obterTodos(endpoint: string): any {
    const url = `${this.apiUrl}/${endpoint}/`;
    const data = ROOMS_MOCK_DATA;
    return data;
  }
}
