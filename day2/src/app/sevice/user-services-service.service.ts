import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { UsersDetails } from '../API/users-details';
import { IUser } from '../Interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserServicesServiceService {

  constructor(private http: HttpClient) { }

  url='https://jsonplaceholder.typicode.com/users';
  fakeUrl=UsersDetails.GetAll;

  returnAllUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
  }

}
