import { useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles.css";
import Header from "./components/Header";
import SearchPage from "./Pages/SearchPage";
import HomePage from "./Pages/HomePage";
const queryClient = new QueryClient();

export default function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/search",
      element: <SearchPage />
    },
    {
      path: "*",
      element: <h1 className="ideal-state">404 PAGE NOT FOUND</h1>
    }
  ]);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
        {routes}
      </QueryClientProvider>
    </div>
  );
}
