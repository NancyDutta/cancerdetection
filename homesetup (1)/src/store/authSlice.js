import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            console.log("called");
            console.log(action.payload);
            const { user } = action.payload;
            if(user!=null) {
                state.isAuth = true;
                state.user = user;
            }
            else {
                state.user = null;
                state.isAuth = false;
            }
            // console.log(user)
            // state.isAuth = true;
            // state.user = user;
            // if (user === null) {
            //     state.isAuth = false
            // }
            // else {
            //     state.isAuth = true;
            // }

        },
        // setOtp: (state, action) => {
        //     const { hash, sender, type } = action.payload;
        //     state.otp.sender = sender;
        //     state.otp.hash = hash;
        //     state.otp.type = type;
        // },
    },
})

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions

export default authSlice.reducer