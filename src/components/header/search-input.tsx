"use client"

import { type ChangeEvent } from "react"

import { Button, ButtonGroup } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Flex } from "@chakra-ui/layout"

interface SearchInputProps {
  searchQuery: string
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleClearSearch: () => void
  toggleSearchInputVisibility: () => void
}

const SearchInput = (props: SearchInputProps) => {
  const {
    searchQuery,
    handleSearchChange,
    handleClearSearch,
    toggleSearchInputVisibility,
  } = props

  return (
    <Flex gap={6} justify='space-between'>
      <Input
        id='search-posters'
        autoFocus
        placeholder='Search for posters...'
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <ButtonGroup>
        <Button onClick={handleClearSearch}>Clear</Button>
        <Button onClick={toggleSearchInputVisibility}>Hide</Button>
      </ButtonGroup>
    </Flex>
  )
}

export default SearchInput
