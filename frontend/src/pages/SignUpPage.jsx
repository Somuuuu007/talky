import React from 'react'
import { ShipWheelIcon } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signup } from '../lib/api'

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const queryClient = useQueryClient();

   const {mutate, ispending , error} = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["authUser"]});
    }
   });

  const handdleSignup = (e) => {
    e.preventDefault();
    mutate(signupData);
  }
  return (
    <div className='flex items-center justify-center h-screen p-4 sm:p-6 md:p-8 'data-theme="forest">
      <div className='border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden'>
        
          {/* left side */}
          <div className='w-full lg:w-1/2 p-4 sm:p-8 flex flex-col'>

          

          {/* right side */}
          <div className='mb-4 flex items-center justify-start gap-2'>
            <ShipWheelIcon className='size-9 text-primary' />
             <span className='text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider'>
              Talky
             </span>
             </div>


             {error && (
              
                <div className='alert alert-error mb-4'>
                  <span>{error.response.data.message}</span>
                </div>
              
             )}

             <div className='w-full'>
                <form onSubmit={handdleSignup}>
                     <div className='space-y-4'>
                      <div>
                        <h2 className='text-xl font-semibold '>Create an account</h2>
                        <p className='text-sm opacity-70'>
                          Join Talky to connect with friends and family.
                        </p>
                      </div>
                      <div className='space-y-3'>
                          <div className='form-control w-full'>
                            <label className='label'>
                              <span className='label-text'>Full Name</span>
                            </label>
                            <input type="text" placeholder='Enter your full name' className='input input-bordered w-full' value={signupData.fullName} onChange={(e) => setSignupData({...signupData, fullName: e.target.value})} required/>
                          </div>
                          <div className='form-control w-full'>
                            <label className='label'>
                              <span className='label-text'>Email</span>
                            </label>
                            <input type="email" placeholder='Enter your email' className='input input-bordered w-full' value={signupData.email} onChange={(e) => setSignupData({...signupData, email: e.target.value})} required/>
                          </div>
                          <div className='form-control w-full'>
                            <label className='label'>
                              <span className='label-text'>Password</span>
                            </label>
                            <input type="password" placeholder='Enter your password' className='input input-bordered w-full' value={signupData.password} onChange={(e) => setSignupData({...signupData, password: e.target.value})} required/>
                          <p className='text-xs opacity-70 mt-1'>
                            Password must be at least 8 characters long.
                          </p>
                          </div>

                          <div className="form-control">
                            <label className='label cursor-pointer justify-start gap-2'>
                              <input type="checkbox" className='checkbox checkbox-sm'required />
                              <span className='text-xs'>I agree to the {""} 
                                <span className='text-primary hover:underline'>Terms of Service</span> and {""}
                                <span className='text-primary hover:underline'>Privacy Policy</span>
                              </span>
                            </label>
                          </div>

                      </div>

                      <button type='submit' className='btn btn-primary w-full'>
                        {ispending ? (
                          <>
                          <span className='loading loading-spinner loading-xs'></span>
                          Loading...
                          </>
                        ) : (
                          "Create Account"
                        )}
                      </button>

                      <div className='text-center mt-4'>
                        <p className='text-sm '>Already have an account? {""}
                        <Link to='/login' className='text-primary hover:underline'>Sign in</Link>
                        </p>

                      </div>
                      
                     </div>
                </form>
             </div>

      </div>
      {/* right side */}
      <div className='hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center'>
        <div className='max-w-md p-8'>
          <div className='realative aspect-square mx-auto max-w-sm'>
            <img src="/i.png" alt="Illustration" className='w-full h-full' />
        </div>
        <div className='mt-6 space-y-3 text-center'>
          <h2 className='text-xl font-semibold'>Welcome to Talky</h2>
          <p className='opacity-70'>
            Connect with friends and family.
          </p>
        </div>
        </div>
      </div>
    </div>
    </div>
  
)
}

export default SignUpPage
