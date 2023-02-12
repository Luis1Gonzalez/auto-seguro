import AutoSeguro from "./components/AutoSeguro"
import { CalculatorProvider } from "./context/CalculatorProvider"

function App() {

  return (
    <CalculatorProvider>
      <AutoSeguro />
    </CalculatorProvider>
  )
}

export default App
