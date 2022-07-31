import { POKEMON_LOADING, POKEMON_FAIL, POKEMON_SUCCESS } from './actionTypes';

export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};

export type PokemonSprites = {
  front_default: string;
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export interface PokemonLoading {
  type: typeof POKEMON_LOADING;
}

export interface PokemonFail {
  type: typeof POKEMON_FAIL;
}

export interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS;
  payload: PokemonType;
}

export type PokemonDispatchTypes =
  | PokemonLoading
  | PokemonFail
  | PokemonSuccess;

export interface ItuneState {
  resultCount: number;
  results: Itune[];
}

export interface Itune {
  wrapperType: string;
  kind: string;
  artistId?: number;
  collectionId?: number;
  trackId: number;
  artistName: string;
  collectionName?: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName: string;
  artistViewUrl?: string;
  collectionViewUrl?: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  releaseDate: Date;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount?: number;
  discNumber?: number;
  trackCount?: number;
  trackNumber?: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable?: boolean;
  trackRentalPrice?: number;
  collectionHdPrice?: number;
  trackHdPrice?: number;
  trackHdRentalPrice?: number;
  contentAdvisoryRating?: string;
  longDescription?: string;
  hasITunesExtras?: boolean;
}
