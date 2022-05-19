import { configureStore } from "@reduxjs/toolkit";
import {filmsApi} from "../services/films.service";
import filmsReducer from './slices/Films.slice';

export const store = configureStore({
    reducer: {
        [filmsApi.reducerPath]: filmsApi.reducer,
        films: filmsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;