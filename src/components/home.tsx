import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";


function Landing() {
    return (
        <>
            <div>
                <div className='w-2/5 m-20 mt-'>
                    <h1 className='text-4xl '><span className='text-yellow-500 font-bold '>User-Centric Excellence</span>: Our <br /> <span className='font-semibold'>App Development services</span><br /> Tackles Your Pain</h1>
                    <div className='mt-6'>Experience a Seamless Digital Journey with <span className='text-[#88A855] font-bold'>Desun</span> - Where Every Line of Code Resolves Your Challenges and <span className='text-yellow-500 font-semibold'>Elevates Your App Experience</span> to Unparalleled Heights.</div>
                </div>
                <Card className=" w-1/2 my-12 mx-24 pt-8 rounded-xl shadow-2xl">
                    <CardHeader>
                        <CardTitle>Leave your contacts and we will call you back within 30 minutes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex w-full items-center gap-2">
                                <div className="w-1/2">
                                    <div className="flex flex-col space-y-1.5 mb-8">
                                        <Label htmlFor="name" className="text-slate-600">
                                            Full name
                                        </Label>
                                        <Input id="name" placeholder="" type="text" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="b-name">Business name</Label>
                                        <Input id="b-name" placeholder="" type="text" />
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="flex flex-col space-y-1.5 mb-8">
                                        <Label htmlFor="phone" className="text-slate-600">
                                            Phone number
                                        </Label>
                                        <Input id="phone" placeholder="" type="number" />
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="email">Business mail</Label>
                                        <Input id="email" placeholder="" type="email" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button>Discuss the project</Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}

export default Landing
