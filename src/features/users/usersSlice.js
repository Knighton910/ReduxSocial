import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {id: '0', name: "Becky Smith", email: "dabeckster@gmail.com"},
  {id: '1', name: "Stan Kontos", email: "mrpausekontos@hotmail.com"},
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer