import React from 'react'



function Footer() {
    return (
        <>
            <div className='m-12 p-10 bg-black flex-col rounded-2xl mx-20'>
                <div className='flex justify-center mb-5'>
                    <img src="logo-bg-3.png" alt="company-logo" />
                </div>
                <div className='text-slate-100 flex justify-around '>
                    <div>
                        <div className='text-slate-500 text-sm' > Contact nums</div>
                        <div>+91 000000000</div>
                    </div>
                    <div>
                        <div className='text-slate-500 text-sm'>Gmail</div>
                        <div>demo@mail.com</div>
                    </div>
                    <div>
                        <div className='text-slate-500 text-sm'>Address</div>
                        <div>Mumbai, India</div>
                    </div>
                    <div>
                        <div className='text-slate-500 text-sm'>Leave a request</div>
                        <div>Leave a request</div>
                    </div>
                </div>
                <div className='text-sm text-slate-300 flex justify-center mt-6'>
                    We work throughout the world.
                </div>
            </div>
        </>
    )
}

export default Footer
