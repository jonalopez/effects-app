import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as usuariosActions from '../actions';
import { of } from 'rxjs'; // convierte un elemento en observable
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuariosService } from '../../services/usuario.service';
import { CargarUsuariosSuccess } from '../actions/usuarios.actions';


@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        public usuariosService: UsuariosService
    ) {}

    @Effect()
    cargarUsuarios$ = this.actions$.ofType( usuariosActions.CARGAR_USUARIOS )
            .pipe(
               switchMap( () => {
                    return this.usuariosService.getUsers()
                            .pipe(
                                map( user => new usuariosActions.CargarUsuariosSuccess(user) ),
                                catchError( error => of(new usuariosActions.CargarUsuariosFail( error )) )
                            );
               })
            );
}
