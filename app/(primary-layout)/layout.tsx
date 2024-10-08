"use client"

import { type ReactNode } from "react"

import { Container, Box } from "@chakra-ui/layout"
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav"

import Header from "@/src/components/header"

interface PrimaryLayoutProps {
  children: ReactNode
}

const PrimaryLayout = (props: PrimaryLayoutProps) => {
  const { children } = props

  return (
    <>
      <SkipNavLink id='skip-nav' zIndex='skipLink' color='black'>
        Skip to Content
      </SkipNavLink>

      <Header />

      <Container as='main' maxW='100vw' p={0}>
        <SkipNavContent id='skip-nav' />

        <Box
          id='content'
          maxW={{ base: "full", xl: "1100px" }}
          px={4}
          mx='auto'
        >
          {children}
        </Box>
      </Container>
    </>
  )
}

export default PrimaryLayout
