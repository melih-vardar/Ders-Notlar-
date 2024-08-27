import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools initialIsOpen={true} />
</QueryClientProvider>;
