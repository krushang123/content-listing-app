"use client"

import { IconButton } from "@chakra-ui/button"
import { ArrowBackIcon, SearchIcon } from "@chakra-ui/icons"
import { Stack, Flex, Heading } from "@chakra-ui/layout"

interface HeaderProps {
  categoryTitle: string
  isInputVisible: boolean
  showInput: () => void
}

const Header = (props: HeaderProps) => {
  const { categoryTitle, isInputVisible, showInput } = props

  return (
    <Flex justify='space-between'>
      <Stack spacing={6} direction='row'>
        <IconButton
          isRound
          size='lg'
          color='white'
          _hover={{
            color: "#171717",
            bgColor: "white",
          }}
          variant='ghost'
          aria-label='Navigate back'
          icon={<ArrowBackIcon boxSize={6} />}
        />

        <Heading as='h1'>{categoryTitle}</Heading>
      </Stack>

      {!isInputVisible && (
        <IconButton
          size='lg'
          colorScheme='white'
          variant='ghost'
          aria-label='Search posters'
          icon={<SearchIcon boxSize={6} />}
          onClick={showInput}
        />
      )}
    </Flex>
  )
}

export default Header
