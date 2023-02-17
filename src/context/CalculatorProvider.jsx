import { createContext, useState } from "react"
import { yearDifference, calculateCoverage, calculateOrigin, calculateTime, calculateMinor } from '../helpers/index'
import { cars } from '../data/options'


const CalculatorContext = createContext()

const CalculatorProvider = ({ children }) => {


    const [data, setData] = useState({
        brand: '',
        model: '',
        year: '',
        type: '',
        time: '',
        drivers: '',
        minor: '',
        name: '',
        email: '',
        phone: '',
        matricula: ''
    })

    const [modal, setModal] = useState(false)
    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [charging, setCharging] = useState(false)

    const handleChangeData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }



const CalculatedInsurance = () => {

let basicPrice = 500;

//Obtener cuantos años tiene el carro
const carAge = yearDifference(data.year)

//Descuento de 3% por año
basicPrice -= ((carAge * 3) * basicPrice) / 100

//Calcular el impacto por origen 
const origin = cars.filter(filt => filt.modelo === data.model)
const determinateOrigen = (origin[0].origen) 

basicPrice *= calculateOrigin(determinateOrigen)

//Calcular el tipo de cobertura
basicPrice *= calculateCoverage(data.type)

//Calculando incremento por conductor menor de 25años
basicPrice *= calculateMinor(data.minor)

//Calcular descuento por extencion del contrato
basicPrice -= calculateTime(data.time)

setCharging(true)

setTimeout(() => {
    setResultado(basicPrice)
    setCharging(false)
},3000)

}

    return (
        <CalculatorContext.Provider
            value={{
                data,
                handleChangeData,
                CalculatedInsurance,
                modal,
                setModal,
                error,
                setError,
                resultado
            }}>
            {children}
        </CalculatorContext.Provider>
    )
}

export {
    CalculatorProvider
}
export default CalculatorContext