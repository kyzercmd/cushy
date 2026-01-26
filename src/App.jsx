import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import { AllRoutes } from "./routes/AllRoutes";

import "./App.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AllRoutes />
    </QueryClientProvider>
  );
}

export default App;
