import { RouterProvider } from "react-router"
import AppRoutes from "./AppRoutes"
import "./style.scss"
import { AuthProvider } from "./features/auth/auth.context.jsx"

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
      <h1>Welcome to the App</h1>
    </AuthProvider>
  )
}

export default App