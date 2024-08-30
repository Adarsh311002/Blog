import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20 p-3'>
      {/* left */}

      <div className='flex p-3 mx-auto max-w-3xl flex-col  md:items-center justify-center '>
      <Link to="/" className='font-bold text-4xl dark:text-white'>
       <span className='px-2 py-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-lg text-white'>Blog</span>
       </Link>
       <p className='text-sm mt-5'>This is a demo project. You can sign in with your email and password or with Google.</p>

      </div>
        
        {/* right */}

        <div className='flex justify-center mt-10'>
        <form className='flex flex-col items-center w-full max-w-lg gap-6 p-6 bg-white rounded shadow-lg'>
          <div className='w-full'>
            <Label value='Username' />
            <TextInput type='text' placeholder='Your Username' id='username' />
          </div>
          <div className='w-full'>
            <Label value='Email' />
            <TextInput type='email' placeholder='Your Email' id='email' />
          </div>
          <div className='w-full'>
            <Label value='Password' />
            <TextInput type='password' placeholder='Your password' id='password' />
          </div>
          <Button className='w-full' gradientDuoTone='purpleToBlue' type='submit'>Sign Up</Button>
          <div className='flex gap-2 text-sm mt-2'>
          <span>Have an account?</span>
          <Link to='/signin' className='text-blue-500'>Sign-In</Link>
          </div>
        </form>
       
        
    </div>
    </div>
  )
}

export default SignUp
