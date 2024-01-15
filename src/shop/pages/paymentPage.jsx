import { Navbar, Payment} from "../components"

export const PaymentPage = () => {
  
  
  return (
    <div>
      <div className='shadow-lg rounded-lg p-4'>
            <div className="container mx-auto">                
                <Navbar></Navbar>
            </div>
      </div>
      <div className="container mx-auto">
        <Payment></Payment>
      </div>
    </div>
  )
}