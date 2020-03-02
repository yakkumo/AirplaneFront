import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { aiplane } from '../models/aiplane';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  base_path = 'https://localhost:44304/Airplane';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  // Create a new item
  createItem(item): Observable<aiplane> {
    item.id = 0;
    item.quantidadePassageiros = parseInt(item.quantidadePassageiros);
    item.dataRegistro = new Date;
    console.log(item);
    return this.http
      .post<aiplane>(this.base_path, item, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  // Get single aiplane data by ID
  getItem(id): Observable<aiplane> {
    return this.http
      .get<aiplane>(this.base_path + '/' + id)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  // Get aiplanes data
  getList(): Observable<aiplane> {
    return this.http
      .get<aiplane>(this.base_path)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  // Update item by id
  updateItem(id, item): Observable<aiplane> {
    item.quantidadePassageiros = parseInt(item.quantidadePassageiros);
    return this.http
      .put<aiplane>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<aiplane>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

}