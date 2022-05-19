import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Film} from "../types/Film.type";

export const filmsApi = createApi({
    reducerPath: 'filmsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2/',
        prepareHeaders: headers => {
            headers.set('X-API-KEY', 'e3206ef0-ba5d-43cd-a28c-13ffd3d7e465');
            headers.set('Content-Type', 'application/json');

            // 'X-API-KEY': 'e3206ef0-ba5d-43cd-a28c-13ffd3d7e465',
            // 'Content-Type': 'application/json',
            return headers
        }
    }),
    endpoints: (builder) => ({
        getFilms: builder.query<Film, string>({
            query: () => 'films',
        })
    })
});

export const { useGetFilmsQuery } = filmsApi