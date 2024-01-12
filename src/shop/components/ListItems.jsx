import {Item} from '.'
import { getProductsByCategory } from '../../helpers/getProductsByCategory'
import { getProducts } from '../../helpers/getProducts';
import { useEffect } from 'react';


export const ListItems = ({category}) => {


    let products = getProducts()
    if(category){
        products = getProductsByCategory(category)
    }
    
  return (
    <>
        {/* Options */}
      <div className='grid grid-cols-3 gap-4 mt-8'>
        {/* Filters */}
        <div className='flex gap-4'>
            <select name="" id="" className='border-2 border-green-600 p-2 rounded-md text-sm' placeholder='Filtar Por'>
                <option value="Precio: alto-bajo">Precio: alto-bajo</option>
                <option value="Precio: bajo-alto">Precio: bajo-alto</option>
            </select>
            <button className='pt-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#16a34a" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
            </button>
        </div>
        {/* SearchBar */}
        <div className='col-span-2 block mr-12'>
            <form>   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <input type="search" id="default-search" class="w-3/5 p-2 ps-10 text-sm border-2 text-gray-900  border-gray-500 rounded-lg bg-white" placeholder="Busca un Producto..." required />
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3">
                        <button type='submit'>
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="#16a34a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
      </div>

        {/* List Items */}

        <div className='grid grid-cols-5 mt-20 gap-10'>
            {
                products.map((product, id) => (
                    <Item key={id} product={product}></Item>
                ))
            }
        </div> 
    </>
  )
}
