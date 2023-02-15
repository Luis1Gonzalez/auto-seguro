import useQuotation from "../hooks/useQuotation"
import Form from "./Form"
import Modal from "./Modal"
import Spinner from "./Spinner"


export default function AutoSeguro() {

const {modal, setModal, charging} = useQuotation()
console.log(modal)
    return (
        <>
        <header className="my-10">
            <h1 className="text-slate-300 text-center text-3xl font-black italic">Auto - Seguro</h1>
            <h1  className='text-white text-center text-2xl'>Sistema de Cotización</h1>
        </header>
        <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-6'>
            {modal ? <Modal /> : <Form />}
        </main>
        </>
    )
}