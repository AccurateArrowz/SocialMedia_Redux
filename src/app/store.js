import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../features/Posts/PostsSlice";


export const store = configureStore({
    reducer: {
        posts: PostReducer, 
    }
})