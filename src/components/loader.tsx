"use client"

import { Center } from "@chakra-ui/layout"
import { Spinner } from "@chakra-ui/spinner"

const Loader = () => (
  <Center w='100%' h='100%' flex={1}>
    <Spinner thickness='4px' speed='0.65s' size='xl' />
  </Center>
)

export default Loader
