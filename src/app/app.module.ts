import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Módulos personalizados
import { AppComponent } from './app.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SharedModule } from './shared/shared.module';

// NgRx
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsuariosModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
