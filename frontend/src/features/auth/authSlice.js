import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//global state
const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//REGISTER USER
//user will come from the form
//register action or function
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    console.log(user);
  }
);

//LOGIN USER
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  console.log(user);
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
