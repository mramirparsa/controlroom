import { QueryClient } from "@tanstack/react-query";

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 30,
        gcTime: 1000 * 60 * 5,
      },
      mutations: {
        retry: 0,
      },
    },
  });
