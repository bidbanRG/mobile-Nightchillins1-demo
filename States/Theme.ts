import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


interface Theme {
  value: boolean;
}


const initialState: Theme = {
  value: true,
}

export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
   changeTheme: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { changeTheme } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer