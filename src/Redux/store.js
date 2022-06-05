/* eslint-disable no-undef */
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import showcaseSlice from './showcaseSlice'

const rootReducer = combineReducers({ showcase: showcaseSlice })

export function createStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'
  })
}
