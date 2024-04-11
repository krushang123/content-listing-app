import { combineReducers } from "@reduxjs/toolkit"

import postersReducer from "@/src/store/posters/posters-slice"
import searchReducer from "@/src/store/search/search-slice"

// Combining reducers to create the root reducer
const rootReducer = combineReducers({
  // Reducer for managing posters state
  posters: postersReducer,

  // Reducer for managing search state
  search: searchReducer,
})

export default rootReducer
