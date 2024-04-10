"use client"

import { useState } from "react"

import { type StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

import { Stack, AspectRatio, Text } from "@chakra-ui/layout"

interface ThumbnailCardProps {
  src: string | StaticImport
  alt: string
  name: string
  fallbackImageUrl: string
}

const ThumbnailCard = (props: ThumbnailCardProps) => {
  const { src, alt, name, fallbackImageUrl } = props

  const [isImageError, setIsImageError] = useState<boolean>(false)

  const handleImageError = () => {
    setIsImageError(true)
  }

  return (
    <Stack>
      <AspectRatio ratio={2 / 3}>
        <Image
          priority
          src={isImageError ? fallbackImageUrl : src}
          alt={alt}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          onError={handleImageError}
          style={{
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
