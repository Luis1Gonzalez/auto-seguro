import { useEffect, useState } from 'react'
import { brands, cars, years, type, timeContract } from '../data/options'
import useQuotation from '../hooks/useQuotation'

export default function Form() {

    const { data, handleChangeData, CalculatedInsurance } = useQuotation()
    const [filtering, setFiltering] = useState([])

    const filtered = data.brand

    useEffect(() => {
        const modelsFiltered = cars.filter(models => models.marca === filtered)
        setFiltering(modelsFiltered)
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.values(data).includes('')) {
            console.log('Todos los campos son obligatorios')
            return
        }
        CalculatedInsurance()
    }

// console.log(timeContract)
    return (
        <form onSubmit={handleSubmit}>
            <h3 className='text-center py-2 text-2xl text-red-700'>Formulario</h3>

            <div className='border-b-2 mb-5'>
                <p className='text-center p-2 text-gray-700'>Datos del Cliente</p>

                <div className='flex flex-col items-center'>
                    <input type="text" placeholder='Cliente' className='border-black   w-[100%] rounded-md my-1 px-3 bg-gray-200' />
                    <input type="cel" pattern="[0-9]{9}" placeholder="Ingresa el telefono" className='border-black w-[100%] rounded-md my-1 px-3 bg-gray-200' />
                </div>

                <div className='my-2 text-gray-700 flex items-center justify-around'>
                    <label htmlFor="driverNumber">Numero de Conductores:</label>
                    <select name="" id="driverNumber" className='px-1 rounded-md bg-gray-200'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

                <div className='mt-2 mb-4 text-gray-700 flex items-center justify-around'>
                    <label htmlFor="driver25">Menores de 25 años:</label>
                    <select name="" id="driver25" className='px-1 rounded-md bg-gray-200'>
                        <option value="1">No</option>
                        <option value="2">Si</option>
                    </select>
                </div>

            </div>

{/* =========================================================================== */}

            <div className='flex flex-col items-center pb-2 border-b-2 mb-5'>
                <p className=' p-2'>Datos del Vehiculo</p>

                <div className='flex items-center'>
                    <p className='w-1/3'>Matricula:</p>
                    <input type="text" placeholder='XJR-215' className='px-3 rounded-md bg-gray-200 w-1/3 text-center uppercase' />
                </div>
                <select className='px-3 rounded-md bg-gray-200 my-1' value={data.brand} name='brand' onChange={e => handleChangeData(e)}>
                    <option value="">-- Marca --</option>

                    {brands.map(brand => (
                        <option key={brand.id} value={brand.marca}>
                            {brand.marca}
                        </option>
                    ))}
                </select>

                <select className='px-3 rounded-md bg-gray-200 my-1' value={data.model} name='model' onChange={e => handleChangeData(e)}>
                    <option value="">-- Modelo --</option>

                    {filtering.map(filtered => (
                        <option key={filtered.id} value={filtered.modelo}>
                            {filtered.modelo}
                        </option>
                    ))}
                </select>

                <select className='px-3 rounded-md bg-gray-200 my-1 mb-4' value={data.year} name='year' onChange={e => handleChangeData(e)}>
                    <option value="">-- Año --</option>

                    {years.map(year => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>

            </div>

            <div className='flex flex-col items-center pb-2 border-b-2 mb-5'>
                <p className=' p-2'>Datos de la Poliza</p>

                <select className='px-3 rounded-md bg-gray-200 my-1 w-[100%]' value={data.type} name='type' onChange={e => handleChangeData(e)}>
                    <option value="">-- Cobertura --</option>

                    {type.map(typ => (
                        <option key={typ.id} value={typ.mode}>
                            {typ.mode}
                        </option>
                    ))}
                </select>

                <select className='px-3 rounded-md bg-gray-200 my-1' value={data.time} name='time' onChange={e => handleChangeData(e)}>
                    <option value="">-- Extención --</option>
                    {timeContract.map(time => (
                        <option key={time.id} value={time.time}>
                            {time.time}
                        </option>
                    ))}

                </select>

            </div>

            <input type="submit" className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold' value='cotizar' />

        </form>
    )
}
