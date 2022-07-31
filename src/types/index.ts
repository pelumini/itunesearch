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

export interface ITodo {
  id: string;
  description: string;
  completed: boolean;
}

export interface ITodoState {
  todos: ITodo[];
  todoCount: number;
  completed: number;
  pending: number;
}

export interface IUser {
  id?: string;
  name?: string;
  email: string;
  password: string;
}
