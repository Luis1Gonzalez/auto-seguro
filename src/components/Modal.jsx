import useQuotation from '../hooks/useQuotation'
import CloseBtn from '../assets/cerrar.png'
import { formatCurrency } from '../helpers'

export default function Modal() {

    const { data, resultado, modal, setModal } = useQuotation()

    const hiddenModal = () => {
        
        setTimeout(() => {
            setModal(false)
        }, 1000);
    }

    return (
        <div className='opacity-95 flex flex-col flex-wrap '>
            <div className='flex justify-end'>
                <img src={CloseBtn} alt="boton cerrar modal" onClick={hiddenModal} className='w-6 h-6 hover:cursor-pointer hover:w-[5%] hover:h-[5%]'/>
            </div>
            <h3 className='text-center py-2 text-2xl text-red-700'>Cotización</h3>

            <div className='border-b-2 mb-5'>
                <p className='text-center p-2 text-xl font-bold text-gray-700'>Datos del Cliente</p>

                <div className='flex flex-col items-center border-b-2 mb-5  pb-2'>
                    <p className='text-black font-semibold uppercase flex flex-wrap'>Cliente: <span className='text-gray-600 font-semibold italic'>{data.name}</span></p>
                    <p className='text-black font-semibold flex flex-wrap'>Telefono: <span className='text-gray-600 font-semibold italic'>{data.phone}</span></p>
                    <p className='text-black font-semibold lowercase flex flex-wrap'>Correo: <span className='text-gray-600 font-semibold italic'>{data.email}</span></p>
                </div>

                {/* =================================== */}

                <div className='flex flex-col sm:flex-row justify-center'>
                    <div className='flex flex-col items-center pb-2 mb-5'>
                        <p className='text-center p-2 text-xl font-bold text-gray-700'>Datos del Vehiculo</p>

                        <p className='text-black font-semibold uppercase'>Matricula: <span className='text-gray-600 font-semibold italic'>{data.matricula}</span></p>
                        <p className='text-black font-semibold'>Marca: <span className='text-gray-600 font-semibold italic'>{data.brand}</span></p>
                        <p className='text-black font-semibold'>Modelo: <span className='text-gray-600 font-semibold italic'>{data.model}</span></p>
                        <p className='text-black font-semibold'>Año: <span className='text-gray-600 font-semibold italic'>{data.year}</span></p>
                    </div>

                    {/* =========================================================================== */}

                    <div className='flex flex-col items-center pb-2'>
                        <p className='text-center p-2 text-xl font-bold text-gray-700'>Datos de la Poliza</p>

                        <p className='text-black font-semibold'>Numero de Conductores: <span className='text-gray-600 font-semibold italic'>{data.drivers}</span></p>
                        <p className='text-black font-semibold'>Menores de 25 años: <span className='text-gray-600 font-semibold italic'>{data.minor}</span></p>
                        <p className='text-black font-semibold flex flex-wrap text-center'>Cobertura: <span className='text-gray-600 font-semibold italic'>{data.type}</span></p>
                        <p className='text-black font-semibold'>Años de extención: <span className='text-gray-600 font-semibold italic'>{data.time}</span></p>

                    </div>
                </div>
            </div>

            <div className='border-b-2 mb-5 text-center'>
            <p className="my-2 text-md">
                <span className="font-bold mx-2 text-gray-600 italic">Total Cotización:</span>
                {formatCurrency(resultado)}
            </p>
            </div>

        </div>
    )
}
