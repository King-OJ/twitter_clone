import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    user: null,
    showAlert: false,
    errorMsg: ''
};

const addToLocalStorage = (user, token)=>{
  localStorage.setItem('user', user)
  localStorage.setItem('token', token)
}

export const registerUser = createAsyncThunk('user/registerUser', async (credentials, thunkAPI) => {
  
   try {
      const { data } = await axios.post('http://localhost:3000/api/auth/register', credentials)
      addToLocalStorage(data.user, 'tokennumber')
      return data
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
      setAuthState(state, action) {
        state.authState = action.payload;
      },
      setAuthUser(state, action) {
        state.authUser = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
      .addCase(registerUser.pending, (state)=> {
        state.isLoading = true
      } )
      .addCase(registerUser.fulfilled, (state, action)=> {
        state.user = action.payload.user
        state.isLoading = false
        state.isLoggedIn = true
        state.showAlert = true
        state.errorMsg = action.payload.msg
      } )
      .addCase(registerUser.rejected, (state, action)=> {
        state.isLoading = false
        state.showAlert = true
        state.isLoggedIn = false
        state.errorMsg = action.payload.msg
      } )
    }
      
    })

export const { setAuthState, setAuthUser } = authSlice.actions;

export const selectAuthState = (state) => state.auth.authState;
export const selectAuthUser = (state) => state.auth.authUser;

export default authSlice.reducer