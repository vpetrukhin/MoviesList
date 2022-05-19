
export interface Country {
    country: string;
}

export interface Genre {
    genre: string;
}

export interface Film {
    kinopoiskId: number;
    imdbId: string | null;
    nameRu: string;
    nameEn?: string | null;
    nameOriginal: string;
    countries: Country[];
    genres: Genre[];
    ratingKinopoisk: number;
    ratingImdb: number;
    year: number;
    type: string;
    posterUrl: string;
    posterUrlPreview: string;
}


