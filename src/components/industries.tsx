
import Image from 'next/image'
import React from 'react'

const sectors = [
    {
        title: "Social media",
        imgUrl: "/sector/social-media.svg"
    },
    {
        title: "Fitness and sport",
        imgUrl: "/sector/fitness-and-sport.svg"
    },
    {
        title: "Bank",
        imgUrl: "/sector/bank.svg"
    },
    {
        title: "Construction",
        imgUrl: "/sector/construction.svg"
    },
    {
        title: "Game projects",
        imgUrl: "/sector/game-projects.svg"
    },
    {
        title: "Education",
        imgUrl: "/sector/education.svg"
    },
    {
        title: "Auto, transport",
        imgUrl: "/sector/auto.svg"
    },
    {
        title: "Medicine, health",
        imgUrl: "/sector/medicine.svg"
    },
    {
        title: "Restauants",
        imgUrl: "/sector/restaurants.svg"
    },
    {
        title: "Market places",
        imgUrl: "/sector/marketplaces.svg"
    },
    {
        title: "AR technology",
        imgUrl: "/sector/ar-technology.svg"
    },
    {
        title: "TV series",
        imgUrl: "/sector/tv-series.svg"
    },
    {
        title: "Startups",
        imgUrl: "/sector/startups.svg"
    },
    {
        title: "Religion",
        imgUrl: "/sector/religion.svg"
    },
    {
        title: "Online cources",
        imgUrl: "/sector/online-cources.svg"
    }
]

interface props {
    title: string,
    imgUrl: string,
    key: number,
}

function IndustryDiv({ title, imgUrl, key }: props) {

    return (
        <>
            <div className='inline-flex items-center m-3' key={key}>

                <Image
                    className='bg-white rounded-full shadow-lg p-2'
                    src={imgUrl}
                    width={44}
                    height={44}
                    alt={title}
                ></Image>


                <h1 className='text-base font-light pl-6'>{title}</h1>
            </div>
        </>
    )




}






function Industries() {
    return (
        <>
            <div className='m-20'>
                <h1 className='text-4xl font-semibold w-2/5 mb-9 '>Developed more than <span className='text-[#88A855]'>100</span> projects in <span className='text-[#88A855]'>15</span> industries</h1>

                <div className='grid grid-cols-3 grid-rows-5 p-10'>
                    {sectors.map((props,index) => <IndustryDiv title={props.title} imgUrl={props.imgUrl} key={index}></IndustryDiv>)}
                </div>
            </div>




        </>
    )
}

export default Industries


