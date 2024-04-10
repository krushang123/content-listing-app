/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { type RootState } from "@/src/lib/store"

import { type PageData, type PostersState } from "./types"

export const getPosters = createAsyncThunk(
  "posters/getPosters",
  async (pageNum: number) => {
    const response = await fetch(
      `https://test.create.diagnal.com/data/page${pageNum}.json`,
    )

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: PageData = await response.json()

    return data.page
  },
)

const initialState: PostersState = {
  categoryTitle: "",
  totalContentItems: 0,
  requestedPageNumber: 0,
  requestedPageSize: 0,
  returnedPageSize: 0,
  posters: [],
  hasMorePages: true,
  isLoading: true,
  error: null,
}

const postersSlice = createSlice({
  name: "posters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosters.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getPosters.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.posters = [
          ...state.posters,
          ...action.payload["content-items"].content,
        ]
        state.categoryTitle = action.payload.title
        state.totalContentItems = parseInt(
          action.payload["total-content-items"],
          10,
        )
        state.requestedPageNumber = parseInt(
          action.payload["page-num-requested"],
          10,
        )
        state.requestedPageSize = parseInt(
          action.payload["page-size-requested"],
          10,
        )
        state.returnedPageSize = parseInt(
          action.payload["page-size-returned"],
          10,
        )
        state.hasMorePages = !(state.returnedPageSize < state.requestedPageSize)
      })
      .addCase(getPosters.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? "Failed to fetch posters"
      })
  },
})

export const selectPosters = (state: RootState) => state.posters.posters
export const selectCategoryTitle = (state: RootState) =>
  state.posters.categoryTitle
export const selectTotalContentItems = (state: RootState) =>
  state.posters.totalContentItems
export const selectRequestedPageNumber = (state: RootState) =>
  state.posters.requestedPageNumber
export const selectRequestedPageSize = (state: RootState) =>
  state.posters.requestedPageSize
export const selectReturnedPageSize = (state: RootState) =>
  state.posters.returnedPageSize
export const selectHasMorePages = (state: RootState) =>
  state.posters.hasMorePages
export const selectIsLoading = (state: RootState) => state.posters.isLoading
export const selectError = (state: RootState) => state.posters.error

export default postersSlice.reducer
