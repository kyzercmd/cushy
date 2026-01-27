import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import { AllRoutes } from "./routes/AllRoutes";
import { CartLayout } from "./layouts/CartLayout";

import "./App.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartLayout>
        <AllRoutes />
      </CartLayout>
    </QueryClientProvider>
  );
}

export default App;
