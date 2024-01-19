import { useDispatch, useSelector } from "react-redux"
import { useUiStore } from "../../hooks/useUiStore"
import { Link } from "react-router-dom"


export const CartModal = () => {

    const dispatch = useDispatch()
    const {cart, total} = useSelector(state => state.cart)

    const{closeModal} = useUiStore()

    const onHandleCloseModal = () => {
        dispatch(closeModal())
    }

  return (
    <div>
        <div class="w-64 rounded-lg shadow-xl bg-white">
            <div class="px-6 py-4 ">
                <div className="py-2 mb-2 flex justify-between">
                    <p className="font-bold text-lg">Mi Carrito</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer rounded-full p-1 hover:bg-gray-100" onClick={onHandleCloseModal}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div id="list-item" className="px-2 max-h-48 overflow-auto">
                    <p className="font-bold mb-2">Articulos</p>
                    <hr />
                    <div className="mt-2 flex flex-col gap-2 pb-12">
                        {
                            cart.map((item, id) => (
                                <div className="flex gap-2 justify-between" key={id}>
                                    <p className="text-gray-400">{item.name} x {item.cantidad}</p>
                                    <p className="font-bold"> {item.precio * item.cantidad}$</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div id='total-shop' className="px-2">
                    <hr />
                    <div className="flex gap-2 justify-between mt-2">
                        <p className="font-bold">Total</p>
                        <p className="font-bold">{total}$</p>
                    </div>
                </div>
                <div id='button-pay' className="pt-6 px-4">
                    <Link to='/cart'>
                        <button className='px-3 py-2 rounded-xl bg-green-700 w-full text-white hover:bg-green-800 font-bold'>
                            Pagar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
