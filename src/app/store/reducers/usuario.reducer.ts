// PASO 2 Crear el reducer

import * as fromUsuario from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};

export function usuarioReducer( state = estadoInicial, action: fromUsuario.UsuarioAcciones ): UsuarioState {

    switch ( action.type ) {

        case fromUsuario.CARGAR_USUARIO:
            return {
                ...state,
                loading: true,
                error: null
            };

        case fromUsuario.CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: { ...action.usuario } // ... Devuelve los elementos asociando la posicion y el valor.
            };

        case fromUsuario.CARGAR_USUARIO_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            };

        default:
            return state;
    }
}

