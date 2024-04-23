import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState = {
    username: '',
    isLogedIn:false,
    token: '',
}


const credentialSlice = createSlice({
    name: 'credential',
    initialState,
    reducers: {
        Login(state, action) {
            state.username = action.payload.username;
            state.isLogedIn = true;
            state.token = action.payload.token;
        },

        Logout(state, action) {
            state.username = '';
            state.isLogedIn = false;
            state.token = '';
        },
        updateToken(state, action) {
            state.token = action.payload.token;
        }
    }

})



export const store = configureStore({
    reducer: {credential: credentialSlice.reducer}
})

export const {Login, Logout, updateToken} = credentialSlice.actions;