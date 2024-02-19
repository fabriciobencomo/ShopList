import { Blog , Navbar } from "../components"

export const BlogPage = () => {
    return(
        <div>
            <div className='shadow-lg rounded-lg p-4'>
                <div className="container mx-auto">                
                    <Navbar></Navbar>
                </div>
            </div>
            <div className="container mx-auto p-5">
            <Blog></Blog>
            </div>
        </div>
    )

}