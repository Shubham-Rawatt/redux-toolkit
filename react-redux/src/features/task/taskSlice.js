// import { createSlice } from "@reduxjs/toolkit";



// const taskSlice = createSlice ({
//     name: '',
//     initialState: [],
//     reducers: {}
// })


// export default taskSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name : 'counter',
    initialState: 100,
    reducers:{
        increaseby1:(state)=> { state + 1} ,
        decreaseby1:(state)=> { state - 1} ,
    }
})

export const{increaseby1, decreaseby1} = taskSlice.actions;
export default taskSlice.reducer;


