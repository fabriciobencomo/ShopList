import React, { useState } from 'react'
import { useCartStore } from '../../hooks/useCartStore'
import { useSelector } from 'react-redux'

export const Item = ({product}) => {

  const [counter, setCounter] = useState(1)  
  const {savingItemInCart} = useCartStore()

  const incrementCounterItem = () => {
    const result = counter + 1
    setCounter(result)
  }

  const decrementCounterItem = () => {
    if(counter <= 1) return 
    const result = counter - 1
    setCounter(result)
  } 

  const handleAddClick = () => {
    const newProduct = {...product, cantidad:counter}
    savingItemInCart(newProduct)
  }

  return (
    <div>
        <div class="max-w-sm rounded-lg overflow-hidden shadow-xl">
            <img class="w-full h-40" src={product.img ? product.img : 'https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="Sunset in the mountains"/>
            <div class="px-6 py-4 min-h-64 max-h-64 flex flex-col justify-between">
                <div className=' max-h-32 overflow-auto'>
                  <div class="font-bold text-xl mb-2">{product.name}</div>
                  <p className='text-gray-500'>Origen-{product.origen}</p>
                </div>
                <div class="flex gap-4 pt-4 pb-2 mt-4 justify-between">
                    <p className='font-bold text-xl'>{product.precio}$</p>
                    <div className='flex gap-4 justify-between'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#16a34a" className="w-6 h-6" onClick={decrementCounterItem}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>                        
                        <p> {counter} </p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#16a34a" className="w-6 h-6" onClick={incrementCounterItem}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                </div>
                <div className='mt-4 block'>
                    <button className='px-3 py-2 rounded-xl bg-black w-full text-white hover:bg-green-800' onClick={handleAddClick}>
                        Añadir a la Cesta
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
