import '../index.css'

export default function Navbar() {
  return (
    <nav className='pt-3 pb-1 shadow bg-light border'>
        <div className="md:container flex w-full justify-between space-x-4 border md:mx-auto lg:px-4">
          <div className="flex justify-between w-full">
            <div className="text-bold font-serif text-4xl">
              <a href="/">Logo</a>
            </div>
            <div className="hidden md:flex space-x-12 justify-between items-center">
              <a href="#" className='text-xl hover:text-primary'>Explore</a>
              <a href="sign-up" className='bg-primary text-white px-3 py-1 rounded-md'>Become a seller
              </a>
              <a href="sign-in" className='border border-primary text-primary px-3 py-1 rounded-md active:bg-slate-300'>
                Sign in
                </a>
                {/* <a href="settings" className="text-2xl text-primary">
                <i class="fa-solid fa-gear"></i>
                </a> */}
            </div>
          </div>
        </div>
        {/* <div className="container flex mx-auto my-2">
        <div className="flex w-full justify-center">
              <input type="text" placeholder='Search a product' 
              className="w-1/2 py-1 border border-gray-400 focus:outline-none px-2 flex-shrink" />
              <button className="bg-black px-3 flex justify-center items-center"><i className="fa-solid fa-magnifying-glass w-3 text-white"></i></button>
          </div>
        </div> */}
    </nav>
  )
}
