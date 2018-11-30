// PASO 3 Crear el reducer que va a manejar todos los reducer.

import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    usuarios: reducers.UsuariosState;
}


