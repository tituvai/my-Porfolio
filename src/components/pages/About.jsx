import React, { useState } from 'react'
import HeaddingThree from '/src/components/HeaddingThree'
import HeaddingFive from '/src/components/HeaddingFive'
import Flex from '../Flex'
import Peragrap from '../Peragrap'
import Button from '../Button'
import Hadding from '../Hadding'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGithub, FaFigma,} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJquery, SiExpress, SiMongodb } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaFileDownload } from "react-icons/fa";



const About = () => {

    const [selectedButton, setSelectedButton]= useState('experience')
    const heandleExperience = (buttonName)=>{
        setSelectedButton(buttonName)
        
    }
  return (
    <div>
        <div className="container mx-auto px-4 lg:px-8">
            <HeaddingThree className={'text-center'} textThree={<><span>About</span> <span className='text-green-500'>Me</span></>}/>
            <div className={'lg:flex justify-between py-20'}>
                <div className="lg:w-[30%]">
                <HeaddingThree textThree={'Why hire me?'}/>
                    <Peragrap className={'py-6'} peraText={"I'm passionate about Web development  and I bring a creative touch through graphic design."}/>
                    <Button onClick={()=> heandleExperience('experience')} value={selectedButton === 'experience'}  className={'w-full mt-4'} btnText={'Experience'}/>
                    <Button onClick={()=> heandleExperience('education')} value={selectedButton === 'education'}  className={'w-full mt-4'} btnText={'Education'}/>
                    <Button onClick={()=> heandleExperience('skills')} value={selectedButton === 'skills'} className={'w-full mt-4'} btnText={'Skills'}/>
                    <Button onClick={()=> heandleExperience('aboutMe')} value={selectedButton === 'aboutMe'} className={'w-full mt-4'} btnText={'About Me'}/>
                </div>
                {/* Experiens Part Start  */}

               {selectedButton ==='experience' && <div className="lg:w-[65%]">
                    <HeaddingFive className={'pt-8 lg:pt-0'} textFive={'My Experince'}/>
                    <Peragrap className={'pt-5'} peraText={'With experience in web development I’ve worked on Various projects, delivering high-quality, responsive websites that effectively meet client needs and exceed expectations.'}/>
                    <Flex className={'justify-between flex-col md:flex-row flex-wrap pt-8 gap-y-5'}>
                        <div className="lg:w-[48%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500">
                        <Hadding className={'text-sm font-open text-green-500'} text={'2025-Present'} as={'h6'}/>
                        <HeaddingFive className={'py-4'} textFive={'Mern Stack Developer'}/>
                        <div className="flex items-center gap-x-3">
                            <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                            <Peragrap peraText={'Creative It institute'}/>
                        </div>
                    </div>
                    <div className="lg:w-[48%] bg-stone-900 rounded-md p-4 lg:p-5 hover:border-1 hover:border-green-500">
                        <Hadding className={'text-sm font-open text-green-500'} text={'2024-Present'} as={'h6'}/>
                        <HeaddingFive className={'py-4'} textFive={'Web Developer Intern.'}/>
                        <div className="flex items-center gap-x-3">
                            <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                            <Peragrap peraText={'Ibcs Primax Softwear Bangladash ltd'}/>
                        </div>
                    </div>
                        <div className="lg:w-[48%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500">
                        <Hadding className={'text-sm font-open text-green-500'} text={'2025-Present'} as={'h6'}/>
                        <HeaddingFive className={'py-4'} textFive={'Front-End Developer'}/>
                        <div className="flex items-center gap-x-3">
                            <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                            <Peragrap peraText={'Online Course Platfrom.'}/>
                        </div>
                    </div>
                    <div className="w-full lg:w-[48%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500">
                        <Hadding className={'text-sm font-open text-green-500'} text={'2024-Present'} as={'h6'}/>
                        <HeaddingFive className={'py-4'} textFive={'Ui/Ux Design'}/>
                        <div className="flex items-center gap-x-3">
                            <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                            <Peragrap peraText={'Online Course Platfrom.'}/>
                        </div>
                    </div>
                    </Flex>   
                </div>}

                {/* Experiens Part End */}

                {/* Education Part Start  */}

                {selectedButton==='education' && <div className="lg:w-[65%]">
                    <HeaddingFive className={'pt-8 lg:pt-0'} textFive={'My Education'}/>
                    <Peragrap className={'pt-5'} peraText={"Studied web development and design at top institutes, receiving diplomas in Mern Stack, Front End Development, and Graphics Design while gaining practical skills and knowledge."}/>
                    <Flex className={'justify-between flex-wrap pt-8 gap-y-5 h-[400px] overflow-y-scroll py-5 hide-scrollbar'}>
                        <div className="w-full lg:w-[48%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500">
                        <Hadding className={'text-sm font-open text-green-500'} text={'2020-2024'} as={'h6'}/>
                        <HeaddingFive className={'py-4'} textFive={'Diploma in CSE.'}/>
                        <div className="flex items-center gap-x-3">
                            <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                            <Peragrap peraText={'Habiganj Polytechnic Institute.'}/>
                        </div>
                    </div>
                    <div className="w-full lg:w-[48%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500">
                        <Hadding className={'text-sm font-open text-green-500'} text={'2019-2020'} as={'h6'}/>
                        <HeaddingFive className={'py-4'} textFive={'Secondary School Certificate.'}/>
                        <div className="flex items-center gap-x-3">
                            <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                            <Peragrap peraText={'Habiganj Technical Institute.'}/>
                        </div>
                    </div>
                        <div className="w-full lg:w-[48%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500">
                        <Hadding className={'text-sm font-open text-green-500'} text={'2025-Present'} as={'h6'}/>
                        <HeaddingFive className={'py-4'} textFive={'Mern Stack Developer'}/>
                        <div className="flex items-center gap-x-3">
                            <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                            <Peragrap peraText={'Creative It institute'}/>
                        </div>
                    </div>
                    <div className="w-full lg:w-[48%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500">
                        <Hadding className={'text-sm font-open text-green-500'} text={'2024-Present'} as={'h6'}/>
                        <HeaddingFive className={'py-4'} textFive={'Web Developer Intern.'}/>
                        <div className="flex items-center gap-x-3">
                            <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                            <Peragrap peraText={'Ibcs Primax Softwear Bangladash ltd'}/>
                        </div>
                    </div>
                        <div className="w-full lg:w-[48%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500">
                        <Hadding className={'text-sm font-open text-green-500'} text={'2025-Present'} as={'h6'}/>
                        <HeaddingFive className={'py-4'} textFive={'Front-End Developer'}/>
                        <div className="flex items-center gap-x-3">
                            <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                            <Peragrap peraText={'Online Course Platfrom.'}/>
                        </div>
                    </div>
                    <div className="w-full lg:w-[48%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500">
                        <Hadding className={'text-sm font-open text-green-500'} text={'2024-Present'} as={'h6'}/>
                        <HeaddingFive className={'py-4'} textFive={'Ui/Ux Design'}/>
                        <div className="flex items-center gap-x-3">
                            <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
                            <Peragrap peraText={'Online Course Platfrom.'}/>
                        </div>
                    </div>
                    </Flex>
                   
                </div>}

                {/* Education Part Start  */}

                {/* Skills Part Start  */}

                {selectedButton=== 'skills' && <div className="lg:w-[65%]">
                    <HeaddingFive className={'pt-8 lg:pt-0'} textFive={'My Skills'}/>
                    <Peragrap className={'pt-5'} peraText={"I'm passionate about front-end development  and I bring a creative touch through graphic design . As a Front-End Web Developer & Graphics Designer."}/>
                    <Flex className={'justify-between flex-wrap pt-8 gap-y-5 h-[400px] overflow-y-scroll py-5 hide-scrollbar'}>
                        <div className="w-[30%] lg:w-[22%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500 flex items-center justify-center relative group">
                        <FaHtml5 className='text-7xl group-hover:text-green-500'/>
                        <div className=" px-3 py-1 rounded bg-white text-green-500 absolute -top-5 left-1/2 -translate-x-1/2  transition-all duration-500 scale-0 group-hover:scale-100">
                            <Hadding className={'text-xl text-green-500 font-open font-medium '} text={'html 5'} as={'h6'}/>
                        </div>
                    </div>
                        <div className="w-[30%] lg:w-[22%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500 flex items-center justify-center relative group">
                        <FaCss3Alt className='text-7xl group-hover:text-green-500'/>
                        <div className=" px-3 py-1 rounded bg-white text-green-500 absolute -top-5 left-1/2 -translate-x-1/2  transition-all duration-500 scale-0 group-hover:scale-100">
                            <Hadding className={'text-xl text-green-500 font-open font-medium '} text={'css 3'} as={'h6'}/>
                        </div>
                    </div>
                        <div className="w-[30%] lg:w-[22%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500 flex items-center justify-center relative group">
                        <RiTailwindCssFill className='text-7xl group-hover:text-green-500'/>
                        <div className="w-[150px] text-center px-3 py-1 rounded bg-white text-green-500 absolute -top-5 left-1/2 -translate-x-1/2  transition-all duration-500 scale-0 group-hover:scale-100">
                            <Hadding className={'text-xl text-green-500 font-open font-medium'} text={'tailwind css'} as={'h6'}/>
                        </div>
                    </div>
                        <div className="w-[30%] lg:w-[22%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500 flex items-center justify-center relative group">
                        <FaBootstrap  className='text-7xl group-hover:text-green-500'/>
                        <div className=" px-3 py-1 rounded bg-white text-green-500 absolute -top-5 left-1/2 -translate-x-1/2  transition-all duration-500 scale-0 group-hover:scale-100">
                            <Hadding className={'text-xl text-green-500 font-open font-medium'} text={'bootstrap'} as={'h6'}/>
                        </div>
                    </div>
                        <div className="w-[30%] lg:w-[22%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500 flex items-center justify-center relative group">
                        <IoLogoJavascript className='text-7xl group-hover:text-green-500'/>
                        <div className=" px-3 py-1 rounded bg-white text-green-500 absolute -top-5 left-1/2 -translate-x-1/2  transition-all duration-500 scale-0 group-hover:scale-100">
                            <Hadding className={'text-xl text-green-500 font-open font-medium'} text={'javaScript'} as={'h6'}/>
                        </div>
                    </div>
                        <div className="w-[30%] lg:w-[22%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500 flex items-center justify-center relative group">
                        <SiJquery className='text-7xl group-hover:text-green-500'/>
                        <div className=" px-3 py-1 rounded bg-white text-green-500 absolute -top-5 left-1/2 -translate-x-1/2  transition-all duration-500 scale-0 group-hover:scale-100">
                            <Hadding className={'text-xl text-green-500 font-open font-medium'} text={'jquery'} as={'h6'}/>
                        </div>
                    </div>
                        <div className="w-[30%] lg:w-[22%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500 flex items-center justify-center relative group">
                        <FaReact className='text-7xl group-hover:text-green-500'/>
                        <div className=" px-3 py-1 rounded bg-white text-green-500 absolute -top-5 left-1/2 -translate-x-1/2  transition-all duration-500 scale-0 group-hover:scale-100">
                            <Hadding className={'text-xl text-green-500 font-open font-medium'} text={'react'} as={'h6'}/>
                        </div>
                    </div>
                        <div className="w-[30%] lg:w-[22%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500 flex items-center justify-center relative group">
                        <RiNextjsLine  className='text-7xl group-hover:text-green-500'/>
                        <div className=" px-3 py-1 rounded bg-white text-green-500 absolute -top-5 left-1/2 -translate-x-1/2  transition-all duration-500 scale-0 group-hover:scale-100">
                            <Hadding className={'w-[100px] text-center text-xl text-green-500 font-open font-medium'} text={'next js'} as={'h6'}/>
                        </div>
                    </div>
                        <div className="w-[30%] lg:w-[22%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500 flex items-center justify-center relative group">
                        <FaNodeJs className='text-7xl group-hover:text-green-500'/>
                        <div className=" px-3 py-1 rounded bg-white text-green-500 absolute -top-5 left-1/2 -translate-x-1/2  transition-all duration-500 scale-0 group-hover:scale-100">
                            <Hadding className={'w-[100px] text-center text-xl text-green-500 font-open font-medium'} text={'node js'} as={'h6'}/>
                        </div>
                    </div>
                        <div className="w-[30%] lg:w-[22%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500 flex items-center justify-center relative group">
                        <SiExpress className='text-7xl group-hover:text-green-500'/>
                        <div className=" px-3 py-1 rounded bg-white text-green-500 absolute -top-5 left-1/2 -translate-x-1/2  transition-all duration-500 scale-0 group-hover:scale-100">
                            <Hadding className={'w-[100px] text-center text-xl text-green-500 font-open font-medium'} text={'express js'} as={'h6'}/>
                        </div>
                    </div>
                        <div className="w-[30%] lg:w-[22%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500 flex items-center justify-center relative group">
                        <SiMongodb className='text-7xl group-hover:text-green-500'/>
                        <div className=" px-3 py-1 rounded bg-white text-green-500 absolute -top-5 left-1/2 -translate-x-1/2  transition-all duration-500 scale-0 group-hover:scale-100">
                            <Hadding className={'text-xl text-green-500 font-open font-medium'} text={'mongoDB'} as={'h6'}/>
                        </div>
                    </div>
                        <div className="w-[30%] lg:w-[22%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500 flex items-center justify-center relative group">
                        <FaGithub className='text-7xl group-hover:text-green-500'/>
                        <div className=" px-3 py-1 rounded bg-white text-green-500 absolute -top-5 left-1/2 -translate-x-1/2  transition-all duration-500 scale-0 group-hover:scale-100">
                            <Hadding className={'text-xl text-green-500 font-open font-medium'} text={'github'} as={'h6'}/>
                        </div>
                    </div>
                        <div className="w-[30%] lg:w-[22%] bg-stone-900 rounded-md p-5 hover:border-1 hover:border-green-500 flex items-center justify-center relative group">
                        <FaFigma className='text-7xl group-hover:text-green-500'/>
                        <div className=" px-3 py-1 rounded bg-white text-green-500 absolute -top-5 left-1/2 -translate-x-1/2  transition-all duration-500 scale-0 group-hover:scale-100">
                            <Hadding className={'text-xl text-green-500 font-open font-medium'} text={'figma'} as={'h6'}/>
                        </div>
                    </div>
                    
                    </Flex>
                </div>}

                {/* Skills Part End */}
                    {/* About me Part Start  */}

                   {selectedButton==='aboutMe' && <div className="lg:w-[65%]">
                    <HeaddingFive className={'pt-8 lg:pt-0'} textFive={'About Me'}/>
                    <Peragrap className={'pt-5'} peraText={"I'm a passionate front-end web developer with a creative flair for graphic design. I specialize in building responsive, user-friendly websites that turn ideas into engaging digital experiences."}/>
                    <Flex className={'justify-between py-10'}>
                        <div className="">
                            <Hadding className={'text-base pt-5  font-open'} text={'Name : Titu Sarkar'} as={'h6'}/>
                            <Hadding className={'text-base pt-5  font-open'} text={'Experience : 1+ years'} as={'h6'}/>
                            <Hadding className={'text-base pt-5  font-open'} text={'Nationality : Bangladesh'} as={'h6'}/>
                            <Hadding className={'text-base pt-5  font-open'} text={'Email : titu17940@gmail.com'} as={'h6'}/>
                            <Hadding className={'text-base pt-5  font-open'} text={'Phone : 01761110819'} as={'h6'}/>
                            <Button className={'uppercase mt-10 flex items-center gap-x-3'} btnText={<><span>downlode cv</span><FaFileDownload/></>}/>
                        </div>
                    </Flex>
                </div>}
                    {/* About me Part End*/}

            </div>
        </div>
    </div>
  )
}

export default About