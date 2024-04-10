import { combineReducers } from "@reduxjs/toolkit"

import postersReducer from "@/src/store/posters/posters-slice"

const rootReducer = combineReducers({
  posters: postersReducer,
})

export default rootReducer
