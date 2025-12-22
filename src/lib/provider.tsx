'use client';

import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'sonner';
import { Toaster } from '@/components/ui/sonner';
import { parseError } from './helper/parse-error';

export const GlobalProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            refetchOnWindowFocus: false,
            staleTime: 1 * 30 * 1000,
            gcTime: 5 * 60 * 1000,
            throwOnError(error, query) {
              toast.error(parseError(error));
              query.reset();
              return false;
            },
          },
          mutations: {
            onError(error) {
              toast.error(parseError(error));
            },
          },
        },
      })
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Toaster position="bottom-right" visibleToasts={1} />
    </ThemeProvider>
  );
};
