import placeholderimg from '../assets/placeholder-person.jpg'


export default function Dashboard(props) {
  return (
    <div className='container mx-auto flex flex-col px-6 py-8 my-8 rounded border space-y-3 md:space-y-0 space-x-4 max-w-4xl'>
        <div className="flex space-x-6 px-4 ">
            <div className="w-40">
                <img src={placeholderimg} className='rounded-full' alt="" />
            </div>
            <div className="flex flex-col">
                {/* <h2 className="text-4xl font-bold flex items-center space-x-4 ">
                <i class="fa-solid fa-shop text-primary"></i> <span>Etah Shop</span>
                </h2> */}
                <p className="text-lg flex items-center space-x-3">
                <i class="fa-solid fa-user text-2xl text-primary"></i> <span>Etah Ako</span>
                </p>
                <p className="text-lg flex items-center space-x-3">
                <i class="fa-solid fa-phone text-primary text-2xl"></i> <span>699442211</span>
                </p>
            </div>
        </div>

        <a href="create-shop" 
        className="bg-light self-center max-w-md rounded px-8 py-2 text-center text-primary hover:bg-primary hover:text-light">
            <p className="text-3xl">
                <span className="font-bold">+</span> Create shop
            </p>
        </a>
    </div>
  )
}
