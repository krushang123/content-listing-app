import { combineReducers } from "@reduxjs/toolkit"

import postersReducer from "@/src/store/posters/posters-slice"
import searchReducer from "@/src/store/search/search-slice"

const rootReducer = combineReducers({
  posters: postersReducer,
  search: searchReducer,
})

export default rootReducer
