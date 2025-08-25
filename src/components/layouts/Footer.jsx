import React from 'react'
import Flex from '../Flex'
import Peragrap from '../Peragrap'
import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaGithub, FaFacebookF ,FaWhatsapp} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-10">
        <div className="container mx-auto px-4 lg:px-8">
            <Flex className={'justify-between flex-col-reverse md:flex-row'}>
                <div className="pt-5 lg:pt-0">
                    <Peragrap peraText={'titu sarkar © 2025'}/>
                </div>
                <div className="flex items-center gap-x-3 lg:gap-x-8">
                    <div className="w-[40px] h-[40px] text-green-500 hover:bg-green-500 hover:text-white rounded-full border-2 border-green-500 flex justify-center items-center transition-all duration-300"><Link to={'https://www.linkedin.com/in/titu-sarkar-464878322'} target="_blank"><FaLinkedinIn/></Link></div>
                    <div className="w-[40px] h-[40px] text-green-500 hover:bg-green-500 hover:text-white rounded-full border-2 border-green-500 flex justify-center items-center transition-all duration-300"><Link to={'https://github.com/tituvai'} target="_blank"><FaGithub/></Link></div>
                    <div className="w-[40px] h-[40px] text-green-500 hover:bg-green-500 hover:text-white rounded-full border-2 border-green-500 flex justify-center items-center transition-all duration-300"><Link to={'https://www.facebook.com/share/1Z2AuyAcnE/'} target="_blank"><FaFacebookF/></Link></div>
                    <div className="w-[40px] h-[40px] text-green-500 hover:bg-green-500 hover:text-white rounded-full border-2 border-green-500 flex justify-center items-center transition-all duration-300"><Link to={'/'}><FaWhatsapp /></Link></div>  
                </div>
            </Flex>
        </div>
    </div>
  )
}

export default Footer