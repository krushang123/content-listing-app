/* eslint-disable no-param-reassign */

import { type PayloadAction, createSlice } from "@reduxjs/toolkit"

import { type RootState } from "@/src/lib/store"

import { type SearchState } from "./types"

const initialState: SearchState = {
  searchQuery: "",
  isSearchVisible: false,
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload
    },
    toggleSearchVisibility(state) {
      state.isSearchVisible = !state.isSearchVisible
    },
    resetSearch(state) {
      state.searchQuery = ""
    },
  },
})

export const { updateSearchQuery, toggleSearchVisibility, resetSearch } =
  searchSlice.actions

export const selectSearchQuery = (state: RootState) => state.search.searchQuery
export const selectSearchVisibility = (state: RootState) =>
  state.search.isSearchVisible

export default searchSlice.reducer
