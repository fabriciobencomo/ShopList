import { Suscriptions, Navbar } from "../components"

export const PricingPage = () => {
    return(
        <div>
            <div className='shadow-lg rounded-lg p-4'>
                <div className="container mx-auto">                
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="container mx-auto p-5">
            <Suscriptions></Suscriptions>
            </div>
        </div>
    )

}