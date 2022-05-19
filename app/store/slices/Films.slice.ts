import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Film} from "../../types/Film.type";

interface IFilmsState {
    films: Film[];
};

const initialState: IFilmsState = {
    films: [],
}

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        addFilms(state, action: PayloadAction<Film[]>) {
            state.films.concat(action.payload);
        }
    }
})

export const { addFilms } = filmsSlice.actions;
export default filmsSlice.reducer;