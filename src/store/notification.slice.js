import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  active: false
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotificationState: (state, action) => {
      // console.log(action.payload);
      console.log(action.payload); 
      state.active = action.payload
    }
  }
});
export const {
  setNotificationState
} = notificationSlice.actions;

export default notificationSlice.reducer;
