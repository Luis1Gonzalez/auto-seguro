import { useContext } from "react"
import CalculatorContext from "../context/CalculatorProvider"

export default function useQuotation() {
  return useContext(CalculatorContext)
}
