import {createSlice} from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit"
import type { RootState } from "../store/configureStore"


type Product = {
    id: number,
    title: string
}

interface ProductState {
    products: Product[]
}

const initialState: ProductState = {
    products: [{id:-1, title:''}]
}


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        setProducts: (state, action: PayloadAction<Product[]>) => {            
        }
    }

})