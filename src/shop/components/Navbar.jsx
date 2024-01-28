import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/logo.png'
import { useUiStore } from '../../hooks/useUiStore'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const{isCartModalOpen} = useSelector(state => state.ui)
    const{openModal, closeModal} = useUiStore()
    const dispatch = useDispatch()

    const onChangeStateModal = () => {
        if(isCartModalOpen){
            dispatch(closeModal())
        }else{
            dispatch(openModal())
        }
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
                    <ul className="flex space-x-2 bold gap-10">
                        <Link to={'/'}><li className='cursor-pointer hover:text-lime-700'>Tienda</li></Link>
                        <li className='cursor-pointer hover:text-lime-700'>Puntos de Venta</li>
                        <li className='cursor-pointer hover:text-lime-700'>Suscripciones</li>
                        <li className='cursor-pointer hover:text-lime-700'>Blogs</li>
                    </ul>
                </div>
                {/* Cart and User */}
                <div className="p-2">
                    <ul className="flex space-x-2 bold gap-2">
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