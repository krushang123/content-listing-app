import { SimpleGrid } from "@chakra-ui/layout"

import { type Poster } from "@/src/store/posters/types"

import ThumbnailCard from "./thumbnail-card"

interface ThumbnailGridProps {
  posters: Poster[]
}

const ThumbnailGrid = (props: ThumbnailGridProps) => {
  const { posters } = props

  return (
    <SimpleGrid columns={3} spacingX={6} spacingY={10}>
      {posters.map((item, index) => (
        <ThumbnailCard
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          src={`https://test.create.diagnal.com/images/${item["poster-image"]}`}
          alt={item.name}
          name={item.name}
        />
      ))}
    </SimpleGrid>
  )
}

export default ThumbnailGrid
