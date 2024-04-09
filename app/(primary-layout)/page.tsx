"use client"

import { useEffect, useState } from "react"

import { Stack } from "@chakra-ui/layout"

import ThumbnailGrid from "@/src/components/thumbnail/thumbnail-grid"

interface ContentItem {
  name: string
  "poster-image": string
}

export interface PageData {
  page: {
    title: string
    "total-content-items": string
    "page-num-requested": string
    "page-size-requested": string
    "page-size-returned": string
    "content-items": {
      content: ContentItem[]
    }
  }
}

const HomePage = () => {
  const [pageData, setPageData] = useState<PageData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://test.create.diagnal.com/data/page1.json",
        )

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const jsonData: PageData = await response.json()

        setPageData(jsonData)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error fetching data:", error)
      }
    }

    void fetchData()
  }, [])

  return (
    <Stack>{pageData !== null && <ThumbnailGrid pageData={pageData} />}</Stack>
  )
}

export default HomePage
