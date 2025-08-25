import React, { useEffect, useState } from 'react'
import Flex from '../Flex'
import{motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiGithub,  FiTwitter,  FiLinkedin, FiMenu , FiX} from "react-icons/fi";



const Header = () => {

  // Toggle The Menu Part Start 
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu= ()=>{
    setIsOpen(!isOpen)
  }
  // Toggle The Menu Part End

  // Contact Form Part Start 

  const [contactFormOpen, setContactFormOpen] = useState(false)
  const openContactForm =()=>{
    setContactFormOpen(true)
  }
  const closeContactForm =()=>{
    setContactFormOpen(false)
  }
  // Contact Form Part End

// Menu Scroll Part Start 

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

   useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  return (
    <>
        <header className={`fixed top-0 left-0 w-full  z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0 bg-black' : '-translate-y-full bg-gray-800'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
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
           className="">
             <Flex>
                <div className="h-10 w-10 rounded-xl font-chakra bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center mr-3"><span className='text-purple-600 font-bold text-xl '>T</span></div>
                <h2 className='text-xl font-bold font-open bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent'>Titu Sarkar</h2>
            </Flex>
           </motion.div>
           
           {/* Desktop Navigation Part Start */}

           <div className="lg:flex hidden gap-x-10">
            {[
              {name:'Home', id:"home"},
              {name:'About', id:"about"},
              {name:'Projects', id:"project"},
              {name:'Contact', id:"contact"}
              ].map((item, index)=>(
              <motion.span initial={{ opacity: 0, y: -20 }}
              key={item.id}
                animate={{opacity: 1, y: 0}}
                transition={{
                type:'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}>
                <a href={`#${item.id}`} className="relative text-gray-200 dark:text-gray-200 hover:text-green-500 dark:hover:text-violet-400 font-medium font-open transition-colors duration-300 group">
                {item.name}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300'></span>
              </a>
              </motion.span>
            ))}
           </div>
           {/* Desktop Navigation Part End */}

           {/* Desktop Social icon Part Start */}

           <div className="md:flex hidden items-center gap-x-5">
           <motion.span 
           initial={{opacity: 0, scale: 0.5}}
           animate={{opacity: 1, scale: 1}}
           transition={{delay: 1.3, duration: 0.8}}
           ><Link to={'/'}><FiGithub className='text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 w-5 h-5'/></Link>
           </motion.span>
           <motion.span 
           initial={{opacity: 0, scale: 0.5}}
           animate={{opacity: 1, scale: 1}}
           transition={{delay: 1.3, duration: 0.8}}
           ><Link to={'/'}>< FiTwitter className='text-gray-300  hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 w-5 h-5'/></Link>
           </motion.span>
           <motion.span 
           initial={{opacity: 0, scale: 0.5}}
           animate={{opacity: 1, scale: 1}}
           transition={{delay: 1.3, duration: 0.8}}
           ><Link to={'/'}>< FiLinkedin className='text-gray-300  hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 w-5 h-5'/></Link>
           </motion.span>

                <motion.button
                onClick={openContactForm}
           initial={{opacity: 0, scale: 0.8}}
           animate={{opacity: 1, scale:1}}
           transition={{
            delay: 1.6,
            duration: 0.8,
            type: 'spring',
            stiffness: 100,
            damping: 15
           }}
           className='ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold font-open hover:from-green-500 hover:to-green-300 hover:text-white transition-all duration-500'>Hire Me</motion.button>
           </div>
           {/* Desktop Social icon Part End */}

           {/* Mobile menu Button Part Start  */}

           <div className="md:hidden flex items-center">
            <motion.button
            whileTap={{scale: 0.7}}
            onClick={toggleMenu}
            className='text-gray-300'
            >{isOpen ? <FiX className='h-6 w-6'/> : <FiMenu className='h-6 w-6'/>}</motion.button>
           </div>
           {/* Mobile menu Button Part End */}

        </div>

        <motion.div 
        initial={{opacity: 0, height: 0}}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{duration: 0.5}}
        className="md:hidden overflow-hidden bg-gray-900 dark:bg-white shadow-lg px-4 py-5 gap-y-5">
          <div className="flex flex-col gap-y-3">
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item, index)=>(
              <span>
                <Link onClick={toggleMenu} to={'/'} key={index} className="text-gray-300 py-2 font-medium ">
                {item}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300'></span>
              </Link>
              </span>
            ))}
          </div>
          {/* social Icon  */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-x-5">
              <Link to={'/'}><FiGithub className='h-5 w-5 text-gray-300'/></Link>
              <Link to={'/'}><FiTwitter className='h-5 w-5 text-gray-300'/></Link>
              <Link to={'/'}><FiLinkedin className='h-5 w-5 text-gray-300'/></Link>
            </div>
          </div>
          <button onClick={()=>{toggleMenu(), openContactForm() }} className='mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold'>Contact Me</button>
        </motion.div>

        {/* contact Form Part Start  */}

        { contactFormOpen &&(
          <motion.div
          initial={{opacity:0}}
          animate={{opacity: 1}}
          exit={{opacity:0}}
          transition={{duration: 0.5}}
          className='fixed inset-0 bg-black/50 background-biur-sm z-50 flex items-center justify-center p-4'>


            <motion.div
            initial={{scale: 0.8, opacity:0, y:300}}
            animate={{scale: 1, opacity: 1, y:0}}
            exit={{scale: 0.8, opacity: 0, y:30}}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
              duration: 0.8
            }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className='text-2xl font-bold text-gray-300'>Get In Touch</h2>
            <button onClick={closeContactForm}><FiX className="w-5 h-5 text-gray-300 font-extrabold"/></button>
          </div>

         {/* input Form Part Start  */}

        <form className='gap-y-4'>
          <div className="">
            <label htmlFor="name" className='text-sm font-medium text-gray-300 mb-1'>Name</label>
            <input id='name' type="text" placeholder='Your Name' className='w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-violet-500 focus:border-violet-500 bg-gray-700' />
          </div>
          <div className="">
            <label htmlFor="email" className='text-sm font-medium text-gray-300 mb-1'>Email</label>
            <input id='email' type="Email" placeholder='Your Email' className='w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-violet-500 focus:border-violet-500 bg-gray-700' />
          </div>
          <div className="">
            <label htmlFor="message" className='text-sm font-medium text-gray-300 mb-1'>Message</label>
            <textarea id='message' rows={'4'} placeholder='How can help you' className='w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-violet-500 focus:border-violet-500 bg-gray-700' />
          </div>
          <motion.button type='submit'
          whileHover={{scale: 1.03}}
          whileTap={{scale: 0.97}}
          className='w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300  rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50'>Send Message</motion.button>
        </form>
        {/* input Form Part End */}
        </motion.div>
          </motion.div>
        )}
        {/* contact Form Part End */}

        
     </header>
    </>
  )
}

export default Header

