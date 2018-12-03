import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'https://reqres.in/api';

  constructor( private http: HttpClient ) { }

  getUsers() {
    return this.http.get(`${ this.url }/users?page=2&per_page=6$delay=3`)
                .pipe(
                  map( resp => {
                    return resp['data'];
                  })
                );
  }

  getUserbyId( id: string ) {
    return this.http.get(`${ this.url }/users/${ id }`)
                .pipe(
                  map( resp => {
                    return resp['data'];
                  })
                );
  }
}
