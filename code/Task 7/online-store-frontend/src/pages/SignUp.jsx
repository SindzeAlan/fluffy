import { useState } from 'react'
import Cookies from 'js-cookie';
import signupimg from '../assets/signup.jpg'

export default function SignUp() {

    const [data,setData] = useState({name:"",email:"",phone:"",password:""});

    async function formHandler(e) {
        e.preventDefault();

        const form = document.querySelector('form');

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const username = form.username.value;

        console.log(name,email,phone,password,username)

        const res = await fetch(
            'http://localhost:5500/signup',
            {
                credentials: "same-origin",
                method: 'POST',
                headers: { "Content-Type":"application/json" },
                body: JSON.stringify({ name,email,phone,password,username })
            }
        )
        const token = Cookies.get('jwt');
        console.log(token);

        
    }

  return (
    <div className=" container max-w-4xl my-6 mx-auto border rounded md:mt-16 md:flex">
        <div className="flex">
            <div className="hidden md:flex flex-1">
                <img src={signupimg} alt="" className='h-full' />
            </div>
            <div className="flex flex-col space-y-2 items-center md:flex-1 py-3 w-full">
                <h2 className='text-3xl font-bold'>Join Us</h2>
                <form 
                onSubmit={e => formHandler(e) }
                className='flex flex-col space-y-6'
                >
                    <div className="flex flex-col">
                        <label htmlFor="name" className='font-bold'>Name</label>
                        <input type="text" id='name' 
                        required
                        name='name'
                        className='border border-gray-400 focus:outline-none p-1' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input type="text" id='email'
                        name='email' 
                        required
                        className='border border-gray-400 focus:outline-none p-1' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className='font-bold'>Phone</label>
                        <input type="text" id='phone' 
                        required
                        name='phone'
                        className='border border-gray-400 focus:outline-none p-1' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className='font-bold'>Password</label>
                        <input type="password" id='password'
                        required 
                        name='password'
                        className='border border-gray-400 focus:outline-none p-1' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="username" className='font-bold'>Username</label>
                        <input type="text" id='username'
                        required 
                        name='username'
                        className='border border-gray-400 focus:outline-none p-1' />
                    </div>

                    <button 
                    type='submit'
                    className='bg-primary text-white font-bold p-2' 
                    >
                        Join
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
