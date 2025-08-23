import React from 'react'
import Flex from '../Flex'
import Hadding from '../Hadding'
import Peragrap from '../Peragrap'
import Button from '../Button'
import { FaFileDownload } from "react-icons/fa";
import Image from '../Image'
import titu from '/src/assets/titu.png'

const Home = () => {
  return (
    <>
    <div className="">
        <div className="container mx-auto px-4 lg:px-8 py-20">
            <Flex className={'justify-between'}>
               <div className="w-[48%]">
                    <Peragrap peraText={'Font-End Developer.'}/>
                    <Hadding className={'text-7xl font-chakra font-bold leading-20'} text={"Hello I'm"} as={'h4'}/>
                    <Hadding className={'text-7xl font-chakra font-bold leading-20 text-green-500'} text={"Titu Sarkar"} as={'h1'}/>
                    <Peragrap className={'pt-5'} peraText={"As a front-end web developer, I specialize in crafting responsive, user-friendly websites that bring ideas to life. Good design creates a great impression and drives business success. Let me help you turn your vision into a digital experience that leaves a lasting impact."}/>
                    <Button className={'flex items-center gap-x-3 mt-10'} btnText={<><span>downlode cv</span><FaFileDownload/></>}/>
                    
                </div> 
               <div className="w-[48%]">
                        <div className="flex justify-end">
                            <Image className={'w-[70%] h-[70%] rounded-full border-1 border-green-500'} imgSrc={titu} imgAlt={'titu.png'}/>
                        </div>
                </div> 
            </Flex>
        </div>
    </div>
    </>
  )
}

export default Home