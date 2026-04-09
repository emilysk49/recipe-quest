import { AppRoutes } from "./routes/AppRoutes";
import "./App.css";
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <AppRoutes />
      </main>
    </div>
  )
}

export default App;