import { createSlice } from "@reduxjs/toolkit"

//now we have initial state in which we store data accessible to entire application 
//so we can grab it anywhere we want 

const initialState = {
    user: null,
    token : null
}

export const userSlice = createSlice({
    name :"user",                        //reducers are simply functions that modify the state to a new state through a specific action 
    initialState,
    reducers: {
        setLogin: (state, action) =>{
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
        setListings: (state, action)=> {
            state.listings= action.payload.listings
        },
        setTripList: (state, action) => {  //trip list here (setTripList)
            state.user.tripList = action.payload
          },
        setWishList: (state, action) => {
            state.user.wishList = action.payload
          },
    }
})

export const { setLogin,setLogout , setListings, setWishList, setTripList } = userSlice.actions
export default userSlice.reducer