import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export let inputType ="html"

export const fetchParagraphs = createAsyncThunk('text/getTextAsync', async (inputNumber)=>{
    const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${inputNumber}&format=${inputType}`)

    return res.data
})

export const textSlice = createSlice({
    name: 'text',
    initialState: {
        items:[],
        inputNumber : 1,

    },
    reducers: {
        onChangeNumber: (state,action) => {
            state.inputNumber = action.payload
        },
        onChangeType:(state,action) => {
            inputType = action.payload
        }
    },
    extraReducers: {
        [fetchParagraphs.fulfilled]: (state,action)=>{
            state.items = action.payload
        }
    }

})

export const { onChangeNumber ,onChangeType} = textSlice.actions

export default textSlice.reducer

