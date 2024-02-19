import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCartStore } from '../../hooks/useCartStore'

export const Payment = () => {

  const{cart,total} = useSelector(state => state.cart)

  const {removingItemInCart} = useCartStore()
  
  const onHandleRemoveItem = (item) => {
    console.log(cart)
    removingItemInCart(item)
  }

  return (
    <div className='flex flex-col md:grid md:grid-cols-3 pt-20 px-14 md:gap-8 '>
      <div className='col-span-2'>
        {
          cart.map((item, id) => (
            <div className='flex flex-col md:flex-row justify-around mb-10' key={id}>
              <div className='w-52 h-52 p-2'>
                <img className="rounded-lg" src={item.img} alt={item.name} />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-bold'>{item.name}</p>
                <p>Origen: {item.origen}</p>
                <p>Cantidad: {item.cantidad} </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer" onClick={e => onHandleRemoveItem(item)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </div>
              <div>
                <p className='font-bold'> {item.cantidad * item.precio}$</p>
              </div>
            </div>
          ))
        }
        </div>
        <div className='flex flex-col gap-4'>
            <p className='font-bold text-xl'>Resumen</p>
            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>{total.toFixed(2)}$</p>
            </div>
            <hr />
            <div className='flex justify-between'>
              <p>Total</p>
              <p>{total.toFixed(2)}$</p>
            </div>
            <hr />
            <button className='px-3 py-2 rounded-xl bg-black w-full text-white hover:bg-green-800'>
              Pagar
            </button>
        </div>
    </div>
  )
}
