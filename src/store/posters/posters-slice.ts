/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { type PageData, type PostersState } from "./types"

export const getPosters = createAsyncThunk(
  "posters/getPosters",
  async (pageNum: number) => {
    const response = await fetch(
      `https://test.create.diagnal.com/data/page${pageNum}.json`,
    )

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data: PageData = await response.json()

    return data.page.contentItems.content
  },
)

const initialState: PostersState = {
  posters: [],
  isLoading: false,
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
        state.posters = [...state.posters, ...action.payload]
      })
      .addCase(getPosters.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? "Failed to fetch posters"
      })
  },
})

export default postersSlice.reducer
