import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { GeneralComponentsModule } from './components/general-components/general-components.module';
import { LoadSpinnerInterceptor } from './common/interceptor/load-spinner.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store';
import { bankRoot } from './store/bank-state/bank-state.root.ts';
import { pokemonRoot } from './store/pokemon-state/pokemon-state.root';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forRoot({
      pokemonState: pokemonRoot.PokemonReducer,
      bankState: bankRoot.BankReducer
    }),
    EffectsModule.forRoot([
      pokemonRoot.PokemonEffects,
      bankRoot.BankEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    NgbModule,
    NgxSpinnerModule,
    GeneralComponentsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadSpinnerInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
