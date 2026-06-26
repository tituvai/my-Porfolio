import React, { useRef } from 'react'
import HeaddingThree from '/src/components/HeaddingThree'
import Flex from '../Flex'
import Image from '../Image'
import nogo from '/src/assets/nogo.png'
import dinrat from '/src/assets/dinratnews.png'
import uomo from '/src/assets/uomo.png'
import Hadding from '../Hadding'
import { Link } from 'react-router-dom'


const Project = () => {
      const scrollRef1 = useRef(null); 
      const scrollRef2 = useRef(null); 
      const scrollRef3 = useRef(null); 

  // অটো-স্ক্রল ফাংশন
  const handleMouseEnter = (scrollRef) => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      if (scrollElement.dataset.scrollInterval) {
        clearInterval(scrollElement.dataset.scrollInterval);
      }
      const scrollSpeed = 5; 
      const interval = setInterval(() => {
        scrollElement.scrollTop += scrollSpeed;
      }, 20); 
      scrollElement.dataset.scrollInterval = interval; 
    }
  };

  const handleMouseLeave = (scrollRef) => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      if (scrollElement.dataset.scrollInterval) {
        clearInterval(scrollElement.dataset.scrollInterval);
      }
      const scrollSpeed = 10;
      const interval = setInterval(() => {
        scrollElement.scrollTop -= scrollSpeed;
      }, 20);
      scrollElement.dataset.scrollInterval = interval;
    }
  };
  return (
    <>
       <div>
         <div className="container mx-auto px-4 lg:px-8">
            <HeaddingThree className={'text-center pb-10'} textThree={<><span>My Pro</span><span className='text-green-500'>ject</span></>}/>
            <Flex className={'py-10 justify-between flex-col md:flex-row gap-y-5 gap-x-3'}>
                <div className="w-full lg:w-[32%] bg-white p-3 rounded">
                    <div  ref={scrollRef1} className=" h-[400px]  overflow-y-scroll group hide-scrollbar"  onMouseEnter={()=> handleMouseEnter(scrollRef1)}  onMouseLeave={()=> handleMouseLeave(scrollRef1)}>
                    <Image className={''} imgSrc={dinrat} imgAlt={'dinratnews.png'}/>
                </div>
                    <div className="pt-3">
                          <a href="https://dinratnews.net" target="_blank" rel="noopener noreferrer"
                            className="text-blue-500 font-chakra font-bold" > Live Preview </a>
                        <Hadding className={'text-sm text-green-500 font-open font-medium py-2'} text={'Next.js, Tailwind css, Express.js, Mongodb'} as={'h6'}/>
                    </div>
                </div>
                <div className="w-full lg:w-[32%] bg-white p-3 rounded">
                    <div  ref={scrollRef2} className=" h-[400px] overflow-y-scroll group hide-scrollbar"  onMouseEnter={()=> handleMouseEnter(scrollRef2)}  onMouseLeave={()=> handleMouseLeave(scrollRef2)}>
                    <Image className={''} imgSrc={uomo} imgAlt={'uomo.png'}/>
                </div>
                    <div className="pt-3">
                      <a href="https://uomo-eight.vercel.app" target="_blank" rel="noopener noreferrer"
                            className="text-blue-500 font-chakra font-bold" > Live Preview </a>
                        <Hadding className={'text-sm text-green-500 font-open font-medium py-2'} text={'React, Tailwind css, JavaScript'} as={'h6'}/>
                    </div>
                </div>
                <div className="w-full lg:w-[32%] bg-white p-3 rounded">
                    <div  ref={scrollRef3} className=" h-[400px] overflow-y-scroll group hide-scrollbar"  onMouseEnter={()=> handleMouseEnter(scrollRef3)}  onMouseLeave={()=> handleMouseLeave(scrollRef3)}>
                    <Image className={''} imgSrc={nogo} imgAlt={'nogo.png'}/>
                </div>
                    <div className="pt-3">
                      <a href="https://ngoo-wine.vercel.app" target="_blank" rel="noopener noreferrer"
                            className="text-blue-500 font-chakra font-bold" > Live Preview </a>
                        <Hadding className={'text-sm text-green-500 font-open font-medium py-2'} text={'React, Tailwind css, JavaScript'} as={'h6'}/>
                    </div>
                </div>

            </Flex>
        </div>
       </div>
    </>
  )
}

export default Project