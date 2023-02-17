import { useEffect, useState } from 'react'
import { brands, cars, years, type, timeContract, driverQuantity, countMinor } from '../data/options'
import useQuotation from '../hooks/useQuotation'
import Error from "../components/Error"

export default function Form() {

    const { data, handleChangeData, CalculatedInsurance, modal, setModal, error, setError } = useQuotation()
    const [filtering, setFiltering] = useState([])

    const filtered = data.brand

    useEffect(() => {
        const modelsFiltered = cars.filter(models => models.marca === filtered)
        setFiltering(modelsFiltered)
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.values(data).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }
        CalculatedInsurance()
        setError('')
        setModal(true)
    }

   
    return (
        <>
        {error && <Error />}
        <form onSubmit={handleSubmit}>
            <h3 className='text-center py-2 text-2xl text-red-700'>Formulario</h3>

            <div className='border-b-2 mb-5'>
                <p className='text-center p-2 text-gray-700'>Datos del Cliente</p>

                <div className='flex flex-col items-center'>
                    <input type="text" name='name' placeholder='Cliente' value={data.name} required className='border-black   w-[100%] rounded-md my-1 px-3 bg-gray-200' onChange={e => handleChangeData(e)} />
                    <input type="tel" name='phone' required placeholder="Telefono" value={data.phone} className='border-black w-[100%] rounded-md my-1 px-3 bg-gray-200' onChange={e => handleChangeData(e)} />
                    <input type="mail" name='email' size="30" required placeholder="Email" value={data.email} className='border-black w-[100%] rounded-md my-1 px-3 bg-gray-200' onChange={e => handleChangeData(e)} />
                </div>

                <div className='my-2 text-gray-700 flex items-center justify-around'>
                    <label htmlFor="driverNumber">Numero de Conductores:</label>
                    <select name="drivers" id="driverNumber" className='px-1 rounded-md bg-gray-200 text-center' value={data.drivers} onChange={e => handleChangeData(e)}>
                    <option>?</option>
                        {driverQuantity.map(driver => (
                            <option className='text-red-500' key={driver.id} value={driver.drivers}>
                                {driver.drivers}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='mt-2 mb-4 text-gray-700 flex items-center justify-around'>
                    <label htmlFor="driver25">Menores de 25 años:</label>
                    <select name="minor" id="driver25" className='px-1 rounded-md bg-gray-200 text-center' value={data.minor} onChange={e => handleChangeData(e)}>
                    <option>?</option>
                        {countMinor.map(menor => (
                            <option className='text-red-500' key={menor.id} value={menor.minors}>
                                {menor.minors}
                            </option>
                        ))}
                    </select>
                </div>

            </div>

            {/* =========================================================================== */}
            <div className='sm:flex justify-around'>
            <div className='flex flex-col sm:flex-row'>
                <div className='flex flex-col items-center pb-2 border-b-2 mb-5'>
                    <p className=' p-2'>Datos del Vehiculo</p>

                        <input type="text"  placeholder='matricula'  value={data.matricula} className='px-3 rounded-md bg-gray-200 w-2/4 text-center uppercase' name='matricula' onChange={e => handleChangeData(e)}/>

                    <select className='px-3 rounded-md bg-gray-200 my-1 text-center' value={data.brand} name='brand' onChange={e => handleChangeData(e)}>
                        <option value="">-- Marca --</option>

                        {brands.map(brand => (
                            <option className='text-red-500' key={brand.id} value={brand.marca}>
                                {brand.marca}
                            </option>
                        ))}
                    </select>

                    <select className='px-3 rounded-md bg-gray-200 my-1 text-center' value={data.model} name='model' onChange={e => handleChangeData(e)}>
                        <option value="">-- Modelo --</option>

                        {filtering.map(filtered => (
                            <option className='text-red-500' key={filtered.id} value={filtered.modelo}>
                                {filtered.modelo}
                            </option>
                        ))}
                    </select>

                    <select className='px-3 rounded-md bg-gray-200 my-1 mb-4 text-center' value={data.year} name='year' onChange={e => handleChangeData(e)}>
                        <option value="">-- Año --</option>

                        {years.map(year => (
                            <option className='text-red-500' key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>

                </div>

                {/* =========================================================================== */}

                <div className='flex flex-col items-center pb-2 border-b-2 mb-5'>
                    <p className=' p-2'>Datos de la Poliza</p>

                    <select className='px-3 rounded-md bg-gray-200 my-1 w-[100%] text-center' value={data.type} name='type' onChange={e => handleChangeData(e)}>
                        <option value="">-- Cobertura --</option>

                        {type.map(typ => (
                            <option className='text-red-500' key={typ.id} value={typ.mode}>
                                {typ.mode}
                            </option>
                        ))}
                    </select>

                    <select className='px-3 rounded-md bg-gray-200 my-1 text-center' value={data.time} name='time' onChange={e => handleChangeData(e)}>
                        <option value="">-- Extención --</option>
                        {timeContract.map(time => (
                            <option className='text-red-500' key={time.id} value={time.time}>
                                {time.time}
                            </option>
                        ))}

                    </select>
                    </div>
                </div>
            </div>
            <input type="submit" className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold mb-8' value='cotizar' />

        </form>
        </>
    )
}
