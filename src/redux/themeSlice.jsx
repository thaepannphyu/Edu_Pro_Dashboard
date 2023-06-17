import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bgTexture: "",
}

export const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        addBgTexture: (state,{payload})=>{
            state.bgTexture = payload
            // localStorage.setItem("bgTexture",state.bgTexture);
        },
    }
})

export const {addBgTexture} = themeSlice.actions
export default themeSlice.reducer