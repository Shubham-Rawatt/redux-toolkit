// import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";


// const taskSlice = createSlice ({
//     name: '',
//     initialState: [],
//     reducers: {}
// })


// export default taskSlice.reducer;


const taskSlice = createSlice({
    name : 'task',
    initialState: [],
    reducers:{}
})

export default taskSlice.reducer;