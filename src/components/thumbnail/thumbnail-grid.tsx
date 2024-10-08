"use client"

import { SimpleGrid } from "@chakra-ui/layout"
import { v4 as uuidv4 } from "uuid"

import { type Poster } from "@/src/store/posters/types"

import ThumbnailCard from "./thumbnail-card"

interface ThumbnailGridProps {
  posters: Poster[]
  searchQuery: string
}

const ThumbnailGrid = (props: ThumbnailGridProps) => {
  const { posters, searchQuery } = props

  const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL ?? "" // Retrieve the base image URL
  const fallbackImageUrl = process.env.NEXT_PUBLIC_FALLBACK_IMAGE_URL ?? "" // Retrieve the fallback image URL

  return (
    <SimpleGrid columns={3} spacingX={4} spacingY={6}>
      {posters.map((item) => (
        <ThumbnailCard
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
          key={uuidv4()}
          src={`${imageUrl}${item["poster-image"]}`}
          alt={item.name}
          name={item.name}
          fallbackImageUrl={fallbackImageUrl}
          searchQuery={searchQuery}
        />
      ))}
    </SimpleGrid>
  )
}

export default ThumbnailGrid
