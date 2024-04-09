"use client"

import { type ReactNode } from "react"

import { Container, Box } from "@chakra-ui/layout"
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav"

interface PrimaryLayoutProps {
  children: ReactNode
}

const PrimaryLayout = (props: PrimaryLayoutProps) => {
  const { children } = props

  return (
    <>
      <SkipNavLink id='skip-nav' zIndex='skipLink'>
        Skip to Content
      </SkipNavLink>

      <Container as='main' maxW='100vw' p={0}>
        <SkipNavContent id='skip-nav' />

        <Box
          id='content'
          maxW={{ base: "full", xl: "1100px" }}
          minH='100vh'
          p={{ base: 6, sm: 10 }}
          mx='auto'
        >
          {children}
        </Box>
      </Container>
    </>
  )
}

export default PrimaryLayout
