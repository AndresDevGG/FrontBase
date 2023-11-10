import { BankState } from './../bank-state/bank-state.model.ts';
import { PokemonState } from "../pokemon-state/pokemon-state.model";

export interface AppState {
  pokemonState: PokemonState;
  bankState: BankState;
}
