import { createSlice } from "@reduxjs/toolkit";

import { configureStore } from "@reduxjs/toolkit";

const watchLaterSlice=createSlice({
    name:"watchLater",
    initialState:{
        items: [],
    },

    reducers:{
        addToWatchLater(state, action){
            const newMovie=action.payload;
            const existingItem=state.items.find((item) => item.id === newMovie.id);

            if(existingItem){
                return
            }


            state.items.push({
                id:newMovie.id,
                title:newMovie.name,
                picture:newMovie.poster,
                rating:newMovie.stars,

            })

        },

        removeFromWatchLater(state, action){
            const id=action.payload;

            const existingItem =state.items.find(item => item.id === id);

            if (existingItem){

                state.items.splice(existingItem , 1)
            
            }


            //state.items=state.items.filter(item => item.id !== id)
        }
        
    }
})

const store=configureStore({
    reducer:{watchLater:watchLaterSlice.reducer}
});

export const watchLaterActions=watchLaterSlice.actions;

export default store;