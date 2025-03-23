import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export interface User  {
 id: number;
 name: string;
 email: string;
 phone: number;
}

interface UsersState {
 users: User[];
 status: 'idle' | 'loading' | 'succeeded' | 'failed';
 error: string | null 
}

const initialState: UsersState = {
 users: [],
  status: "idle",
  error: null
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
 const response = await axios.get<User[]>(API_URL);
 return response.data
});

const usersSlice = createSlice({
 name: "users",
 initialState,
 reducers: {
  addUser: (state, action: PayloadAction<User>) => {
  state.users.push(action.payload);
  },
  updateUser: (state, action: PayloadAction<User>) => {
  const index = state.users.findIndex(u => u.id === action.payload.id);
  if (index !== -1) state.users[index] = action.payload;
  },
  deleteUser: (state, action: PayloadAction<number>) => {
    state.users = state.users.filter(u => u.id !== action.payload);
  },
},
  extraReducers: builder => {
    builder
    .addCase(fetchUsers.pending, state => {
      state.status = 'loading'
    })
    .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>)=>{
      state.status = 'succeeded'
      state.users = action.payload;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed"
      state.error = action.error.message ?? "Ops! Something went wrong..."
    });
  },
 
})

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer