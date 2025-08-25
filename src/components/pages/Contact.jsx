import React from 'react'
import HeaddingThree from '/src/components/HeaddingThree'
import Flex from '../Flex'
import { FaPhoneAlt } from "react-icons/fa";
import Hadding from '../Hadding';
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import Peragrap from '../Peragrap';

const Contact = () => {
  return (
    <>
        <div className='py-10'>
            <div className="container mx-auto px-4 lg:px-8 ">
                <HeaddingThree className={'text-center'} textThree={<><span>Contact</span> <span className='text-green-500'>Me</span></>}/>
                <Flex className={'py-10 justify-between flex-col md:flex-row'}>
                    <div className="lg:w-[30%]">
                        <div className="flex items-center gap-x-3">
                            <div className="bg-stone-800 px-5 py-4 rounded">
                                <FaPhoneAlt className='text-xl text-green-500'/>
                            </div>
                            <div className="">
                                <Hadding className={'text-sm font-light font-open'} text={'Phone'} as={'h6'}/>
                                <Hadding className={'text-base font-medium font-open'} text={'01761110819'} as={'h6'}/>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-3 pt-10">
                            <div className="bg-stone-800 px-5 py-4 rounded">
                                <MdEmail className='text-xl text-green-500'/>
                            </div>
                            <div className="">
                                <Hadding className={'text-base font-open'} text={'Email'} as={'h6'}/>
                                <Hadding className={'text-base font-medium font-open'} text={'titu17940@gamil.com'} as={'h6'}/>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-3 pt-10">
                            <div className="bg-stone-800 px-5 py-4 rounded">
                                <IoLocation className='text-xl text-green-500'/>
                            </div>
                            <div className="">
                                <Hadding className={'text-sm font-light font-open'} text={'Address'} as={'h6'}/>
                                <Hadding className={'text-base font-medium font-open'} text={'Bangladash, Dhaka'} as={'h6'}/>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[65%] bg-stone-900 py-5 px-2 lg:px-8 mt-5 lg:mt-0">
                        <Hadding className={'text-2xl lg:text-[40px] text-green-500 font-open font-medium lg:leading-15'} text={"Let's work together"} as={'h6'}/>
                        <Peragrap className={'py-5'} peraText={'Let’s collaborate to bring your vision to life. I craft dynamic, user-focused designs that make an impact and deliver exceptional results.'}/>
                        <form action="#">
                            <div className="flex justify-between">
                                <div className="w-[48%]">
                                <input className='w-full p-3 bg-black mt-4 outline-0 placeholder:text-white placeholder:text-sm' type="text" placeholder='Frist Name'/>
                                <input className='w-full p-3 bg-black mt-4 outline-0 placeholder:text-white placeholder:text-sm' type="text" placeholder='Email'/>
                                <input className='w-full p-3 bg-black mt-4 outline-0 placeholder:text-white placeholder:text-sm' type="text" placeholder='Service'/>
                                </div>
                                <div className="w-[48%]">
                                <input className='w-full p-3 bg-black mt-4 outline-0 placeholder:text-white placeholder:text-sm' type="text" placeholder='Lest Name'/>
                                <input className='w-full p-3 bg-black mt-4 outline-0 placeholder:text-white placeholder:text-sm' type="text" placeholder='Phone'/>
                                <input className='w-full p-3 bg-black mt-4 outline-0 placeholder:text-white placeholder:text-sm' type="text" placeholder='Country'/>
                                </div>
                            </div>
                            <textarea className='w-full text-sm bg-black h-[150px] p-5 outline-0 placeholder:text-white mt-10 mb-5' placeholder='Message'></textarea>
                            <button className='text-base font-medium font-open px-14 rounded py-4 bg-black hover:bg-green-600 transition-all duration-500 '>Submit</button>
                        </form>
                    </div>
                </Flex>
            </div>
        </div>
    </>
  )
}

export default Contact