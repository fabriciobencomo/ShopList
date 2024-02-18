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
        const stylesFlex = "flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
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
                        <Link to={'/'}><li className='cursor-pointer hover:text-lime-700'>Tienda</li></Link>
                        <li className='cursor-pointer hover:text-lime-700'>Puntos de Venta</li>
                        <li className='cursor-pointer hover:text-lime-700'>Suscripciones</li>
                        <li className='cursor-pointer hover:text-lime-700'>Blogs</li>
                    </ul>
                    <div className='md:hidden'>
                        <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false" onClick={onChangeBurgerMenu}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-user">
                            <ul className={menuBurgerStyles} id='menuBurger'>
                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
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
                        <li>
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