import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { StyledEngineProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import App from "./App.tsx";
import ThemeProvider from "./components/ThemeProvider.tsx";
import "./index.css";
import store from "./store/storeConfig.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}>
      <Provider store={store}>
        <CssBaseline />
        <StyledEngineProvider injectFirst>
          <ThemeProvider>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </CacheProvider>
  </React.StrictMode>
);
