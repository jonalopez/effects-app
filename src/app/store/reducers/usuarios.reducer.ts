// PASO 2 Crear el reducer

import * as fromUsuarios from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};

export function usuariosReducer( state = estadoInicial, action: fromUsuarios.UsuariosAcciones ): UsuariosState {

    switch ( action.type ) {

        case fromUsuarios.CARGAR_USUARIOS:
            return {
                ...state,
                loading: true
            };

        case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                users: [...action.usuarios] // ... Devuelve los elementos asociando la posicion y el valor.
            };

        case fromUsuarios.CARGAR_USUARIOS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };

        default:
            return state;
    }
}

