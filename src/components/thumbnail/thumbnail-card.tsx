"use client"

import { type StaticImport } from "next/dist/shared/lib/get-img-props"

import { Stack, AspectRatio, Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/next-js"

interface ThumbnailCardProps {
  src: string | StaticImport
  alt: string
  name: string
}

const ThumbnailCard = (props: ThumbnailCardProps) => {
  const { src, alt, name } = props

  return (
    <Stack>
      <AspectRatio ratio={2 / 3}>
        <Image
          priority
          src={src}
          alt={alt}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          sx={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </AspectRatio>

      <Text isTruncated>{name}</Text>
    </Stack>
  )
}

export default ThumbnailCard
