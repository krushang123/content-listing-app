"use client"

import { useEffect } from "react"

import { Stack, Box } from "@chakra-ui/layout"
import { useInView } from "react-intersection-observer"

import AlertMessage from "@/src/components/alert-message"
import Loader from "@/src/components/loader"
import ThumbnailGrid from "@/src/components/thumbnail/thumbnail-grid"
import { useAppDispatch, useAppSelector } from "@/src/lib/hooks"
import { getPosters, selectPosters } from "@/src/store/posters/posters-slice"

const HomePage = () => {
  const dispatch = useAppDispatch()

  const { posters, requestedPageNumber, hasMorePages, isLoading, error } =
    useAppSelector(selectPosters)

  const { ref, inView } = useInView({
    threshold: 1,
  })

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
        <ThumbnailGrid posters={posters} />
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
