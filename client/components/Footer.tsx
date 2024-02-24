import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div className='bg-[#0f0f0f] mt-24 text-[#9e9d9d]'>
        <div className='w-[80%] mx-auto pt-20 pb-10'>
            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 text-[14px] gap-8'>
                <div>
                    <h1 className='text-white font-semibold  mb-4 text-sm'>Home</h1>
                    <p className='mb-2'>Categories</p>
                    <p className='mb-2'>Devices</p>
                    <p className='mb-2'>Pricing</p>
                    <p className='mb-2'>FAQ</p>
                </div>
                <div>
                    <h1 className='text-white font-semibold  mb-4 text-sm'>Movies</h1>
                    <p className='mb-2'>Gernes</p>
                    <p className='mb-2'>Trending</p>
                    <p className='mb-2'>New Release</p>
                    <p className='mb-2'>Popular</p>
                </div>
                <div>
                    <h1 className='text-white font-semibold  mb-4 text-sm'>Shows</h1>
                    <p className='mb-2'>Gernes</p>
                    <p className='mb-2'>Trending</p>
                    <p className='mb-2'>New Release</p>
                    <p className='mb-2'>Popular</p>
                </div>
                <div>
                    <h1 className='text-white font-semibold  mb-4 text-sm'>Support</h1>
                    <p className='mb-2'>Contact us</p>
                    
                </div>
                <div>
                    <h1 className='text-white font-semibold  mb-4 text-sm'>Subscription</h1>
                    <p className='mb-2'>Plans</p>
                    <p className='mb-2'>Features</p>
                    
                </div>
                <div>
                    <h1 className='text-white font-semibold  mb-4 text-sm'>Connect With Us</h1>
                    <div className='flex items-center gap-4 text-white'>
                        <button className='bg-[#1f1e1e] p-2 rounded-lg'>
                            <FacebookIcon/>
                        </button>
                        <button className='bg-[#1f1e1e] p-2 rounded-lg'>
                            <TwitterIcon/>
                        </button>
                        <button className='bg-[#1f1e1e] p-2 rounded-lg'>
                            <LinkedInIcon/>
                        </button>
                    </div>
                </div>
            </div>
            <hr className='mt-10 border-t border-gray-300' />
            <div className='flex flex-col md:flex-row items-center justify-between mt-5'>
                <div>
                    <h1>
                    @2023 Utsav, All Rights Reserved
                    </h1>
                </div>
                <div className='flex items-center gap-4'>
                    <h1>Terms of Use</h1>
                    <div className='border-r border-gray-400 h-6'></div>
                    
                    <h1>Privacy Policy</h1>
                    <div className='border-r border-gray-400 h-6'></div>
                    <h1>Cookie Policy</h1>
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer