'use client';

import { type ReactNode } from 'react';

import { ChakraUIProvider } from './chakra-provider';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = (props: ProvidersProps) => {
  const { children } = props;

  return <ChakraUIProvider>{children}</ChakraUIProvider>;
};
