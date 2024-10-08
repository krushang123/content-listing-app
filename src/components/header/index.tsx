"use client"

import { type ChangeEvent } from "react"

import { IconButton } from "@chakra-ui/button"
import { ArrowBackIcon, SearchIcon } from "@chakra-ui/icons"
import { Stack, Flex, Heading } from "@chakra-ui/layout"

import { useAppDispatch, useAppSelector } from "@/src/lib/hooks"
import { selectCategoryTitle } from "@/src/store/posters/posters-slice"
import {
  resetSearch,
  selectSearchQuery,
  selectSearchVisibility,
  toggleSearchVisibility,
  updateSearchQuery,
} from "@/src/store/search/search-slice"

import SearchInput from "./search-input"

const Header = () => {
  const dispatch = useAppDispatch()

  const categoryTitle = useAppSelector(selectCategoryTitle)
  const searchQuery = useAppSelector(selectSearchQuery)
  const isSearchVisible = useAppSelector(selectSearchVisibility)

  const toggleSearchInputVisibility = () => {
    dispatch(toggleSearchVisibility())
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchQuery(event.target.value))
  }

  const handleClearSearch = () => {
    dispatch(resetSearch())
  }

  // INFO: This component provides information about the back button click event.
  // It currently logs a message to the console when the back button is clicked
  const handleBackButtonClick = () => {
    // eslint-disable-next-line no-console
    console.log("Back clicked")
  }

  return (
    <Stack
      as='header'
      maxW={{ base: "full", xl: "1100px" }}
      mx='auto'
      p={4}
      pos='sticky'
      top={0}
      right={0}
      left={0}
      zIndex='sticky'
      bgColor='#171717'
    >
      <Flex justify='space-between'>
        <Stack spacing={2} direction='row' align='center'>
          <IconButton
            minW={0}
            size='lg'
            color='white'
            variant='unstyled'
            aria-label='Navigate back'
            icon={<ArrowBackIcon boxSize={8} />}
            onClick={handleBackButtonClick}
          />

          <Heading as='h1' noOfLines={1}>
            {categoryTitle}
          </Heading>
        </Stack>

        {!isSearchVisible && (
          <IconButton
            minW={0}
            size='lg'
            color='white'
            variant='unstyled'
            aria-label='Search posters'
            icon={<SearchIcon boxSize={6} />}
            onClick={toggleSearchInputVisibility}
          />
        )}
      </Flex>

      {isSearchVisible && (
        <SearchInput
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          handleClearSearch={handleClearSearch}
          toggleSearchInputVisibility={toggleSearchInputVisibility}
        />
      )}
    </Stack>
  )
}

export default Header
