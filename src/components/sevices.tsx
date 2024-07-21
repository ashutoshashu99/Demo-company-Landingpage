import React from 'react'

import { Separator } from "@/components/ui/separator"
import { Divide } from 'lucide-react';

function Sevices() {
    const techStacksweb = ["PHP", "Javascript", "Node.JS", "Web Socket", "Socket.io", "Vue.js", "Nuxt", "MySQL", "Laravel", "GO lang", "django"];
    const techStacksmobile = ["swift", "Kotlin", "Firebase", "CoreData", "realm", "Coroutine", "Rxjava", "Rxswift", "Unit Test", "Alamofire"];
    const devtypes = ["iOS development", 'Android development', 'Web deveplopment', 'UI/UX design', 'Testing', 'Launch', 'IT consulting']

    function creatediv(text: string) {
        return (
            <div className='inline-flex '>

                <div className='text-xl text-slate-600 font-light hover:text-slate-900 mr-5 hover:font-normal text-left mb-8 hover:underline decoration-[#88A855] w-auto'> {text} </div>

                <svg className='text-[#88A855]' width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </div>
        )
    }

    return (
        <>

            <div>
                <Separator className='mx-12'/>
                <img src="planet.png" alt="planet " className='w-full '/>
                <Separator className='mx-12'/>
            </div>
            <div className='p-9 inline-flex bg-white w-full' id='services' >
                <div className='mx-12 w-1/2 pr-8'>
                    <h1 className='text-4xl font-bold'>Full development cycle</h1>
                    <p className='text-sm text-slate-600 mt-7'>We use proven technologies</p>
                    <div className='text-2xl font-medium mt-7' >Web</div>
                    <div className='mt-5'>
                        {techStacksweb.map(techStack => <span className='font-light'>{techStack}<span className='text-green-500'> / </span> <span></span></span>)} <span className='font-light'>Python</span>
                    </div>
                    <div className='text-2xl font-medium mt-7'>Mobile</div>
                    <div className='mt-5'>
                        {techStacksmobile.map(techstack => <span className='font-light'>{techstack} <span className='text-green-500'> / </span></span>)} <span className='font-light'>Python</span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col '>
                        {devtypes.map(creatediv)}
                    </div>
                </div>






            </div>

        </>
    )
}

export default Sevices
