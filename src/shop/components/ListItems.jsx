import {Item} from '.'
import { getProductsByCategory } from '../../helpers/getProductsByCategory'
import { getProducts } from '../../helpers/getProducts';
import { useEffect, useState } from 'react';
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom';
import { getProductsByName } from '../../helpers/getProductsByName';
import { useForm } from '../../hooks/useForm';


export const ListItems = ({category}) => {

 
    const [products, setProducts] = useState(getProducts())
    const [sortBy, setSortBy] = useState('')
    
    const orderProducts = (sortBy) => {
        if(sortBy == 'menor' ){
            setSortBy('menor')
            setProducts(products.sort((a, b) => a.precio - b.precio))
        }else{
            setSortBy('mayor')
            setProducts(products.sort((a, b) => a.precio - b.precio).reverse())
        }
    }

    const sortItems = () => {
        const value = document.getElementById('sortBy').value
        orderProducts(value)
    }

    
    const location = useLocation()
    const navigate = useNavigate()
  
    const {q = ''} = queryString.parse( location.search ) 
    const productsName = getProductsByName(q)

    const {searchText, onInputChange} = useForm({
      searchText: q
    })


    const searchProducts = (e) => {
        e.preventDefault()
        if(searchText.trim().length <= 1) return
        category = ''
        navigate(`/?q=${searchText}`)
    }

    useEffect(() => {
        if(category){
            setProducts(getProductsByCategory(category))
        }
    }, [category])

  return (
    <>
        {/* Options */}
      <div className='grid grid-cols-3 gap-4 mt-8'>
        {/* Filters */}
        <div className='flex gap-4'>
            <select name="sortBy" id="sortBy" className='border-2 border-green-600 p-2 rounded-md text-sm' placeholder='Filtar Por'>
                <option value="mayor">Precio: alto-bajo</option>
                <option value="menor">Precio: bajo-alto</option>
            </select>
            <button className='pt-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#16a34a" className="w-12 h-12 hover:bg-gray-100 p-3 rounded-full" onClick={sortItems}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
            </button>
        </div>
        {/* SearchBar */}
        <div className='col-span-2 block mr-12'>
            <form onSubmit={searchProducts}>   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <input type="text" id="default-search" class="w-3/5 p-2 ps-10 text-sm border-2 text-gray-900  border-gray-500 rounded-lg bg-white" placeholder="Busca un Producto..." onChange={onInputChange}  name="searchText"/>
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
            (q === '') ? (
                products.map((product, id) => (
                    <Item key={product.id} product={product}></Item>
                )))
              :
              ( productsName.map(product =>  (
                <Item key={product.id} product={product}></Item>
              )))
          }

        </div> 
    </>
  )
}
