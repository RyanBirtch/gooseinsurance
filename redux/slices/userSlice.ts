import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'


interface UserState{
    name: string,
    birthday: string,
    address: string,
} 

const initialState: UserState = {
    name:'',
    birthday: '',
    address:''
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUser: (state, action:PayloadAction<UserState>)=>{
            state = action.payload;
        },
        removeUser: (state) =>{
            state = initialState;
        }
    },
})