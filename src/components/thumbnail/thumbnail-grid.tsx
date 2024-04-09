import { SimpleGrid } from "@chakra-ui/layout"

import { type PageData } from "@/app/(primary-layout)/page"

import ThumbnailCard from "./thumbnail-card"

interface ThumbnailGridProps {
  pageData: PageData
}

const ThumbnailGrid = (props: ThumbnailGridProps) => {
  const { pageData } = props

  return (
    <SimpleGrid columns={3} spacingX={6} spacingY={10}>
      {pageData.page["content-items"]?.content.map((item, index) => (
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
