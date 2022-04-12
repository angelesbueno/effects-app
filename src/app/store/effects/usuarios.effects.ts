import { cargarUsuariosSuccess } from './../actions/usuarios.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UsuarioService } from './../../services/usuario.service';
import * as usuariosActions from '../actions/usuarios.actions';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      mergeMap(() =>
        this.usuarioService.getUsers().pipe(
          map((users) =>
            usuariosActions.cargarUsuariosSuccess({ usuarios: users })
          ),
          catchError((err) =>
            of(usuariosActions.cargarUsuariosError({ payload: err }))
          )
        )
      )
    )
  );
}
