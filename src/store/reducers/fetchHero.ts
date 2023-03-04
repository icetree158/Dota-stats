import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IHero } from "../../models/heroModel";

export const fetchHero = createAsyncThunk(
    'hero/fetchHero',
    async (_, thinkApi) => {
        try {
            const res = await axios.get<IHero[]>('https://api.opendota.com/api/heroStats')
            return res.data
        } catch (e) {
            return thinkApi.rejectWithValue('Ошибка загрузки')
        }

    }
)