import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './notification.slice'


export const store = configureStore({
    reducer: {
      notification: notificationReducer
    },
})

