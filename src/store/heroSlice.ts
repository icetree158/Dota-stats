import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHero } from "../models/heroModel";
import { fetchHero } from "./reducers/fetchHero";
interface HeroState {
    heroinfo: IHero[];
    error: string;
    isLoading: boolean;

}

const initialState: HeroState = {
    heroinfo: [],
    error: '',
    isLoading: false,
}
export const heroSlice = createSlice(
    {
        name: 'hero',
        initialState,
        reducers: {


        },
        extraReducers: {
            [fetchHero.fulfilled.type]: (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.heroinfo = action.payload
            },
            [fetchHero.pending.type]: (state) => {
                state.isLoading = true;
            },
            [fetchHero.rejected.type]: (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            }
        },
    }
)
export default heroSlice.reducer