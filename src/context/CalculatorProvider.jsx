import { createContext, useState } from "react"

const CalculatorContext = createContext()

const CalculatorProvider = ({ children }) => {

    const [data, setData] = useState({
        brand: '',
        year: '',
        type: ''
    })

    const handleChangeData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    return (
        <CalculatorContext.Provider
            value={{
                data,
                handleChangeData
            }}>
            {children}
        </CalculatorContext.Provider>
    )
}

export {
    CalculatorProvider
}
export default CalculatorContext