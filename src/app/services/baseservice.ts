import { inject, Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { catchError, forkJoin, map, Observable, tap, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Baseservice {
  private readonly apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  // cadastrar(endpoint: string, data: any): any {
  //   const url = `${this.apiUrl}/${endpoint}/`;
  // }

  obterTodos(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}/`;

    return this.http.get<any>(url).pipe(
      tap((res) => {
        return res;
      }),
      catchError((e) => {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao consultar!',
          text: e.error.error,
          confirmButtonText: 'OK',
        });
        return throwError(() => e);
      })
    );
  }

  cadastrar(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}/`;

    return this.http.post<any>(url, data).pipe(
      tap((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Cadastrado com sucesso!',
          confirmButtonText: 'OK',
        });
        return res;
      }),
      catchError((e) => {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao salvar!',
          text: e.error.error,
          confirmButtonText: 'OK',
        });
        return throwError(() => e);
      })
    );
  }
}
