import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    name: string;
    email: string;
    isAuth: boolean;
    password: string;
}
const initialState:UserState={
    name: '',
    email: '',
    isAuth: false,
    password: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        
    }


})

export default userSlice.reducer
