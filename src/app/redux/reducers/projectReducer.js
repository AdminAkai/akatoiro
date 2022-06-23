import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    projects: ['test', 'test2'],
    currentProject: 0
}

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        changeProject: (state, { payload: currentProject }) => {
            state.currentProject = currentProject
        }
    }
})

export const { changeProject } = projectSlice.actions

export default projectSlice.reducer