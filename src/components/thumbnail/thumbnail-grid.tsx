"use client"

import { SimpleGrid } from "@chakra-ui/layout"
import { v4 as uuidv4 } from "uuid"

import { type Poster } from "@/src/store/posters/types"

import ThumbnailCard from "./thumbnail-card"

interface ThumbnailGridProps {
  posters: Poster[]
}

const ThumbnailGrid = (props: ThumbnailGridProps) => {
  const { posters } = props

  return (
    <SimpleGrid columns={3} spacingX={6} spacingY={10}>
      {posters.map((item) => (
        <ThumbnailCard
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
          key={uuidv4()}
          src={`https://test.create.diagnal.com/images/${item["poster-image"]}`}
          alt={item.name}
          name={item.name}
        />
      ))}
    </SimpleGrid>
  )
}

export default ThumbnailGrid
