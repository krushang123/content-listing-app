"use client"

import { useEffect, useMemo } from "react"

import { Stack, Box } from "@chakra-ui/layout"
import { useInView } from "react-intersection-observer"

import AlertMessage from "@/src/components/alert-message"
import Loader from "@/src/components/loader"
import ThumbnailGrid from "@/src/components/thumbnail/thumbnail-grid"
import { useAppDispatch, useAppSelector } from "@/src/lib/hooks"
import {
  getPosters,
  selectError,
  selectHasMorePages,
  selectIsLoading,
  selectPosters,
  selectRequestedPageNumber,
} from "@/src/store/posters/posters-slice"
import { selectSearchQuery } from "@/src/store/search/search-slice"

const HomePage = () => {
  const dispatch = useAppDispatch()

  const posters = useAppSelector(selectPosters)
  const requestedPageNumber = useAppSelector(selectRequestedPageNumber)
  const hasMorePages = useAppSelector(selectHasMorePages)
  const isLoading = useAppSelector(selectIsLoading)
  const error = useAppSelector(selectError)
  const searchQuery = useAppSelector(selectSearchQuery)

  const { ref, inView } = useInView({
    threshold: 0,
  })

  const filteredPosters = useMemo(() => {
    if (searchQuery.trim() === "") return posters // Return all posters if search query is empty

    const lowerCaseQuery = searchQuery.toLowerCase()

    return posters.filter((poster) =>
      poster.name.toLowerCase().includes(lowerCaseQuery),
    )
  }, [posters, searchQuery])

  useEffect(() => {
    const fetchPosters = async () => {
      const nextPageNum = requestedPageNumber + 1

      await dispatch(getPosters(nextPageNum)) // Fetch posters for the current page
    }

    if (inView && hasMorePages) {
      fetchPosters() // Fetch posters if in view or initially
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <Stack spacing={8}>
      {posters !== null && posters.length > 0 && (
        <ThumbnailGrid posters={filteredPosters} />
      )}

      {!isLoading && error !== null && (
        <AlertMessage
          title='Error Fetching Posters'
          description={
            error ??
            "Oops! Something went wrong while fetching the posters. Please try again later."
          }
        />
      )}

      {isLoading && <Loader />}

      <Box ref={ref} />
    </Stack>
  )
}

export default HomePage
