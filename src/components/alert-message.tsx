"use client"

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  type AlertStatus,
} from "@chakra-ui/alert"
import { Box } from "@chakra-ui/layout"

interface AlertMessageProps {
  title: string
  description: string
  status?: AlertStatus
}

const statusColors: Record<
  AlertStatus,
  { bgColor: string; borderColor: string; titleColor: string }
> = {
  error: {
    bgColor: "red.50",
    borderColor: "red",
    titleColor: "red",
  },
  info: {
    bgColor: "blue.50",
    borderColor: "blue",
    titleColor: "blue",
  },
  warning: {
    bgColor: "yellow.50",
    borderColor: "yellow",
    titleColor: "yellow",
  },
  success: {
    bgColor: "green.50",
    borderColor: "green",
    titleColor: "green",
  },
  loading: {
    bgColor: "gray.50",
    borderColor: "gray",
    titleColor: "gray",
  },
}

const AlertMessage = (props: AlertMessageProps) => {
  const { title, description, status = "error" } = props

  const colorData = statusColors[status]

  const { bgColor, borderColor, titleColor } = colorData

  return (
    <Alert
      status={status}
      alignItems='flex-start'
      bgColor={bgColor}
      border={`2px solid ${borderColor}`}
      borderRadius='xl'
      p={4}
      boxShadow='lg'
    >
      <AlertIcon boxSize={6} />

      <Box>
        <AlertTitle color={titleColor} fontSize='lg' fontWeight='bold'>
          {title}
        </AlertTitle>

        <AlertDescription color='black'>{description}</AlertDescription>
      </Box>
    </Alert>
  )
}

export default AlertMessage
