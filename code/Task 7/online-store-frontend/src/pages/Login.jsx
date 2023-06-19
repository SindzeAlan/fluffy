import loginimg from '../assets/login.jpg'

export default function Login() {
  return (
    <div className="container flex justify-center max-w-4xl mx-auto my-6  border rounded md:items-center md:flex md:mt-16">
        <div className="flex">
            <div className="hidden max-h-96 md:flex flex-1">
                <img src={loginimg} alt="" className='h-full w-full' />
            </div>
            <div className="flex flex-col space-y-2 items-center md:flex-1 py-3 w-full">
                <h2 className='text-3xl font-bold'>Login</h2>
                <form action='' method='' className='flex flex-col space-y-6'>
                    <div className="flex flex-col">
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input type="text" id='email' 
                        className='border border-gray-400 focus:outline-none p-1' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className='font-bold'>Password</label>
                        <input type="password" id='password' 
                        className='border border-gray-400 focus:outline-none p-1' />
                    </div>

                    <button className='bg-primary text-white font-bold p-2'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}
