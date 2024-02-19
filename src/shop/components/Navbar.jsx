import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/logo.png'
import { useUiStore } from '../../hooks/useUiStore'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Navbar = () => {
    const{isCartModalOpen} = useSelector(state => state.ui)
    const{openModal, closeModal} = useUiStore()
    const dispatch = useDispatch()

    const [isBurgerMenuHidden, setIsBurgerMenuHidden] = useState(true)
    const [menuBurgerStyles, setMenuBurgerStyles] = useState('hidden')

    const onChangeStateModal = () => {
        if(isCartModalOpen){
            dispatch(closeModal())
        }else{
            dispatch(openModal())
        }
    }

    const onChangeBurgerMenu = () => {
        const stylesHidden = "hidden"
        const stylesFlex = "flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-green-800"
        if(isBurgerMenuHidden){
            setMenuBurgerStyles(stylesFlex)
        }else{
            setMenuBurgerStyles(stylesHidden)
        }
        setIsBurgerMenuHidden(!isBurgerMenuHidden)
    }

    
    return (
        <div className="mt-6">
            <div className="flex flex-row justify-between">
                {/* Logo */}
                <div className="">
                    <Link to={'/'}><img src={logo} alt="Logo" className='w-24 h-12 cursor-pointer'/></Link>
                </div>
                {/* Menu */}
                <div>
                    <ul className="hidden md:flex space-x-2 bold gap-10">
                        <Link to={'/'}><li className='cursor-pointer hover:text-green-700'>Tienda</li></Link>
                        <Link to={'/location'}><li className='cursor-pointer hover:text-green-700'>Puntos de Venta</li></Link>
                        <Link to={'/pricing'}><li className='cursor-pointer hover:text-green-700'>Suscripciones</li></Link>
                        <Link to={'/blog'}><li className='cursor-pointer hover:text-green-700'>Blogs</li></Link>
                    </ul>
                    <div className='md:hidden'>
                        <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-user" aria-expanded="false" onClick={onChangeBurgerMenu}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-user">
                            <ul className={menuBurgerStyles} id='menuBurger'>
                            <li>
                                <Link to={'/'}><a href="#" className="block py-2 px-3 text-white hover:bg-gray-100 hover:text-green-800 bg-green-800 rounded md:bg-transparent" aria-current="page">Tienda</a></Link>
                            </li>
                            <li>
                                <Link to={'/location'}><a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 hover:text-green-800 md:hover:bg-transparent bg-green-800 text-white">Puntos de Venta</a></Link>
                            </li>
                            <li>
                                <Link to={'/pricing'}><a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 hover:text-green-800 md:hover:bg-transparent bg-green-800 text-white">Suscripciones</a></Link>
                            </li>
                            <li>
                                <Link to={'/blog'}><a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 hover:text-green-800 md:hover:bg-transparent bg-green-800 text-white">Blogs</a></Link>
                            </li>
                            <li>
                                <Link to='/cart'><a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 hover:text-green-800 md:hover:bg-transparent bg-green-800 text-white">Pagar</a></Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Cart and User */}
                <div className="p-2">
                    <ul className="hidden md:flex space-x-2 bold gap-2">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#16a34a" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </li>
                        <li className='hover:cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#16a34a" className="w-6 h-6" onClick={onChangeStateModal}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>        
        </div>
    )
}