import { Injectable } from '@angular/core'
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http'
import { catchError, Observable, of, retry, throwError } from 'rxjs'
import { User } from 'src/app/shared/models/User'
import { Car } from 'src/app/shared/models/Car'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor (private http: HttpClient) {}

  SERVER_URL: string = 'api/'

  getUsers (): Observable<User[]> {
    console.log(this.SERVER_URL + 'users/')
    return this.http.get<User[]>(`${this.SERVER_URL}users/`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error)
        return throwError(error)
      })
    )
  }

  addUser (user: User): Observable<User> {
    console.log('addUser')
    console.log(user)
    return this.http.post<User>(`${this.SERVER_URL}users/`, user).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error)
        return throwError(error)
      })
    )
  }

  getCars (): Observable<Car[]> {
    console.log(this.SERVER_URL + 'cars/')
    return this.http.get<Car[]>(`${this.SERVER_URL}cars/`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error)
        return throwError(error)
      })
    )
  }
}
