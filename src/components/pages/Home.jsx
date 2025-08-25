import React from 'react'
import Flex from '../Flex'
import Hadding from '../Hadding'
import Peragrap from '../Peragrap'
import Button from '../Button'
import { FaFileDownload } from "react-icons/fa";
import Image from '../Image'
import titu from '/src/assets/kobo.png'
import{motion} from 'framer-motion'

const Home = () => {
  return (
    <>
    <div className='pt-10 lg:pt-20'> 
        <div className="container mx-auto px-4 lg:px-8 py-20">
            <Flex className={' flex-col-reverse md:flex-row justify-between'}>
               <motion.div 
                  initial={{opacity: 0, x: -100}}
                  animate={{opacity: 1, x: 0}}
                    transition={{
                    type:'spring',
                    stiffness:100,
                    damping:25,
                    delay:0.3,
                    duration:1.2
                  }}
                  className="lg:w-[48%]">
                    <Peragrap peraText={'Font-End Developer.'}/>
                    <Hadding className={'text-5xl lg:text-7xl font-chakra font-bold leading-15 lg:leading-20'} text={"Hello I'm"} as={'h4'}/>
                    <Hadding className={'text-5xl lg:text-7xl font-chakra font-bold leading-15 lg:leading-20 text-green-500'} text={"Titu Sarkar"} as={'h1'}/>
                    <Peragrap className={'pt-5'} peraText={"As a front-end web developer, I specialize in crafting responsive, user-friendly websites that bring ideas to life. Good design creates a great impression and drives business success. Let me help you turn your vision into a digital experience that leaves a lasting impact."}/>
                    <Button className={'flex items-center gap-x-3 mt-10'} btnText={<><span>downlode cv</span><FaFileDownload/></>}/>
                    
                </motion.div> 
               <div className="lg:w-[48%]">
                  <motion.div  initial={{scale: 0,}}
                  animate={{scale: 1,}}
                    transition={{
                    stiffness:100,
                    damping:25,
                    delay:0.3,
                    duration:1.2
                  }} className="w-full flex justify-center lg:justify-end pb-5 lg:pb-0">
                      <Image className={'w-[70%] h-[70%] rounded-full border-1 border-green-500'} imgSrc={titu} imgAlt={'titu.png'}/>
                  </motion.div>
                </div> 
            </Flex>
        </div>
    </div>
    </>
  )
}

export default Home