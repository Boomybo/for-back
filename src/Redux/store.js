/* eslint-disable no-undef */
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import showcaseReducer from './showcaseSlice'

const rootReducer = combineReducers({ showcase: showcaseReducer })

export function createStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'
  })
}
