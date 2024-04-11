import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"
import { type Dict } from "@chakra-ui/utils"

// Global style overrides
import styles from "./styles"

// Foundational style overrides

// Component style overrides

const customTheme: Dict = extendTheme(
  {
    styles,
    fonts: {
      heading: "var(--font-titillium-web)",
      body: "var(--font-titillium-web)",
    },
    // Other foundational style overrides go here
  },
  {
    components: {
      // Other components go here
    },
  },
  withDefaultColorScheme({
    colorScheme: "gray",
  }),
)

export default customTheme
