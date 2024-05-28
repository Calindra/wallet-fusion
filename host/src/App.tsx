import { CssBaseline, ThemeProvider } from '@mui/material'
import ThemeSettings from "./layouts/full-layout/customizer/ThemeSettings.tsx";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes/routes.tsx"

function App() {
  const router = createBrowserRouter(routes);
  const theme = ThemeSettings();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
