import { Navbar, SellPoints } from "../components"

export const SellPointsPage = () => {
  
  
  return (
    <div>
      <div className='shadow-lg rounded-lg p-4'>
            <div className="container mx-auto">                
                <Navbar></Navbar>
            </div>
      </div>
      <div className="container mx-auto pt-6 flex justify-center">
        <SellPoints></SellPoints>
      </div>
    </div>
  )
}