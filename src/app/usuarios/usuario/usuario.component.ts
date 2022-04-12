import { Usuario } from './../../models/usuario.model';
import { cargarUsuario } from './../../store/actions/usuario.actions';
import { AppState } from './../../store/app.reducers';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario;
  public loading: boolean = false;
  public error: boolean = false;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('usuario').subscribe(({ user, loading, error }) => {
      this.usuario = user;
      this.loading = loading;
      this.error = error;
    });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(cargarUsuario({ id }));
    });
  }

}
