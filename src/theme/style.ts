import { type Styles } from "@chakra-ui/theme-tools"

export const styles: Styles = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
    },
    "*::placeholder": {
      color: "chakra-placeholder-color",
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color",
    },
    h1: {
      fontSize: "4xl",
      textTransform: "capitalize",
      color: "#002B53",
    },
  },
}
