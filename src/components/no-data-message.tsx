"use client"

import Image from "next/image"

import { Text, Box, Stack } from "@chakra-ui/layout"

import NoDataFoundImage from "../../public/images/no-data-found.jpg"

interface NoDataMessageProps {
  messageTitle: string
  imageAlt?: string
}

const NoDataMessage = (props: NoDataMessageProps) => {
  const { messageTitle, imageAlt = messageTitle } = props

  return (
    <Stack align='center'>
      <Box w='250px' h='300px' position='relative'>
        <Image
          src={NoDataFoundImage}
          alt={imageAlt}
          fill
          placeholder='blur'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>

      <Text
        fontSize='xl'
        textAlign='center'
        fontWeight='bold'
        textTransform='capitalize'
      >
        {messageTitle}
      </Text>
    </Stack>
  )
}

export default NoDataMessage
