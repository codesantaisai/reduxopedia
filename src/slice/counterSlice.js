import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:10
}
export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increament:(state)=>{
            state.count +=1;
        },
        decreament:(state)=>{
            state.count -=1;
        },
        decreamentMultiplier:(state,action)=>{
            state.count -= action.payload;
        },
        increamentMultiplier:(state,action)=>{
            state.count +=Number(action.payload);
        },

    }
})


export const {decreament,increament,decreamentMultiplier,increamentMultiplier} = counterSlice.actions;
export default counterSlice;