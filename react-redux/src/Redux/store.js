import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducers'
import taskSlice from '../features/task/taskSlice'

const store = configureStore({
  counter : taskSlice,
  reducer: rootReducer,   //-- define reducers file
})

export default store