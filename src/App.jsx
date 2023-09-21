import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { UserProvider, OptionProvider } from './contexts'

function App() {
  return (
    <UserProvider>
      <OptionProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </OptionProvider>
    </UserProvider>
  )
}

export default App
