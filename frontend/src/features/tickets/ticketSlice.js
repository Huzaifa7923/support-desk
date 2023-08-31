import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ticketService from "./ticketService";

const initialState = {
  tickets: [],
  ticket: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// export const createTicket=createAsyncThunk("tickets/create",async(ticket,thunkAPI)=>{
//     try{
//         return await ticketService.createTicket(ticket)
//     }catch(e){

//     }
// })

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {},
});
export default ticketSlice.reducer;
export const { reset } = ticketSlice.actions;
