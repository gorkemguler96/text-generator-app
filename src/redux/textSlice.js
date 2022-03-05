import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchParagraphs = createAsyncThunk('text/getTextAsync', async ({inputNumber, inputType})=>{
    const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${inputNumber}&format=${inputType}`)

    return res.data
})

export const textSlice = createSlice({
    name: 'text',
    initialState: {
        items:[],
        inputNumber : 1,
        inputType:"html"

    },
    reducers: {
        onChangeNumber: (state,action) => {
            state.inputNumber = action.payload
        },
        onChangeType:(state,action) => {
            state.inputType = action.payload
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

