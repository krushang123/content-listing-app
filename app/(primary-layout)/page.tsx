"use client"

import { useEffect } from "react"

import { Stack } from "@chakra-ui/layout"

import AlertMessage from "@/src/components/alert-message"
import Loader from "@/src/components/loader"
import ThumbnailGrid from "@/src/components/thumbnail/thumbnail-grid"
import { useAppDispatch, useAppSelector } from "@/src/lib/hooks"
import { getPosters, selectPosters } from "@/src/store/posters/posters-slice"

const HomePage = () => {
  const dispatch = useAppDispatch()
  const { posters, isLoading, error } = useAppSelector(selectPosters)

  useEffect(() => {
    const fetchPosters = async () => {
      await dispatch(getPosters(1))
    }

    fetchPosters()
  }, [dispatch])

  return (
    <Stack spacing={8}>
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

      {!isLoading && posters !== null && posters.length > 0 && (
        <ThumbnailGrid posters={posters} />
      )}
    </Stack>
  )
}

export default HomePage
