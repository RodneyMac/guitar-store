import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userItem: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const itemIndex = state.userItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === 1) {
        state.userItem[itemIndex].userQuantity = 1;
      } else {
        const client = { ...action.payload, userQuantity: 1 };
        state.userItem.push(client);
      }
    },

    clearClient: (state, action) => {
      state.userItem = [];
    },
  },
});

export const { addUser, clearClient } = userSlice.actions;
export default userSlice.reducer;
