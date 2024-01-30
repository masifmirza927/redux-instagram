import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        loading: false,
        userInfo: null,
        userToken: null,
        error: null,
        success: false,
    },
    reducers: {
        loginStart: (state) => {}
    },
})

export const { loginStart  } = authSlice.actions

export default authSlice.reducer