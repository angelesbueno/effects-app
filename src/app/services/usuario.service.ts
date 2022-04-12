import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(`${ this.url }/users?per_page=6&delay=3`).pipe(map(resp => resp['data']));
  }

  public getUserById(id: string): Observable<any> {
    return this.http.get(`${ this.url }/users/${ id }`).pipe(map(resp => resp['data']));
  }
}
