import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { useAppDispatch, useAppSelector } from './hooks';

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

 
// export const alterTheme = (value:boolean) => {
//   const { changeTheme } = counterSlice.actions
//    const dispatch = useAppDispatch();
//    dispatch(changeTheme(value));
// }
export const { changeTheme } = counterSlice.actions
// Other code such as selectors can use the imported `RootState` type
export const selectTheme = useAppSelector((state:RootState) => state.theme.value)

export default counterSlice.reducer