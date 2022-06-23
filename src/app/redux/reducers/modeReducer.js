import { createSlice } from '@reduxjs/toolkit'

import { 
    ENGLISH_LANGUAGE, 
    DARK_MODE,
} from '../actions'

const initialState = {
    theme: DARK_MODE,
    language: ENGLISH_LANGUAGE
}

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        changeTheme: (state, { payload: theme }) => {
            state.theme = theme
        },
        changeLanguage: (state, { payload: language }) => {
            state.language = language
        }
    }
})

export const { changeTheme, changeLanguage } = modeSlice.actions

export default modeSlice.reducer