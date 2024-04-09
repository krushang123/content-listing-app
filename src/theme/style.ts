import { type Styles } from "@chakra-ui/theme-tools"

export const styles: Styles = {
  global: {
    body: {
      fontFamily: "body",
      bg: "#171717",
      color: "#FFFFFF",
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
  },
}
