"use client"

import { useEffect } from "react"

import { Stack } from "@chakra-ui/layout"

import ThumbnailGrid from "@/src/components/thumbnail/thumbnail-grid"
import { useAppDispatch, useAppSelector } from "@/src/lib/hooks"
import { getPosters, selectPosters } from "@/src/store/posters/posters-slice"

const HomePage = () => {
  const dispatch = useAppDispatch()
  const { posters } = useAppSelector(selectPosters)

  useEffect(() => {
    const fetchPosters = async () => {
      await dispatch(getPosters(1))
    }

    fetchPosters()
  }, [dispatch])

  return (
    <Stack>
      {posters.length > 0 && posters !== null && (
        <ThumbnailGrid posters={posters} />
      )}
    </Stack>
  )
}

export default HomePage
