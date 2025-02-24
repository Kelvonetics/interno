import { RiFacebookBoxLine, RiInstagramFill, RiLinkedinFill, RiTwitterFill } from '@remixicon/react'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <section className='footer z-20 mt-[80px] lg:mt-[150px]'>
      <div className="container mx-auto px-0">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px] lg:mb-[150px]">
            <div className="footer__item">
                <a href="#" className='flex justify-center lg:justify-start mb-8'>
                    <img src={logo} alt="logo" />
                </a>
                <p className='mb-8 text-lg text-center'>
                    It is a long established fact that a reader will be distracted looking.
                </p>

                <ul className='text-primary flex gap-[50px] justify-center lg:justify-start'>
                    <li>
                        <a href="#">
                            <RiFacebookBoxLine size={30} className='text-accent' />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <RiTwitterFill size={30} className='text-accent' />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <RiLinkedinFill size={30} className='text-accent' />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <RiInstagramFill size={30} className='text-accent' />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row text-center lg:text-right gap-8 lg:gap-[100px] lg:justify-end">
                <div className="footer__item">
                    <h3 className='text-3xl mb-3'>Pages</h3>
                    <ul>
                        <li>
                            <a href="#" className='!text-[16px]'>About Us</a>
                        </li>
                        <li>
                            <a href="#" className='!text-[16px]'>Testimonials</a>
                        </li>
                        <li>
                            <a href="#" className='!text-[16px]'>Our Works</a>
                        </li>
                        <li>
                            <a href="#" className='!text-[16px]'>Blog</a>
                        </li>
                        <li>
                            <a href="#" className='!text-[16px]'>Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__item">
                    <h3 className='text-3xl mb-3'>Services</h3>
                    <ul>
                        <li>
                            <a href="#" className='!text-[16px]'>Kitchen</a>
                        </li>
                        <li>
                            <a href="#" className='!text-[16px]'>Living Room</a>
                        </li>
                        <li>
                            <a href="#" className='!text-[16px]'>Bedroom</a>
                        </li>
                        <li>
                            <a href="#" className='!text-[16px]'>Bathroom</a>
                        </li>
                        <li>
                            <a href="#" className='!text-[16px]'>Others</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__item max-w-[260px] mx-auto lg:mx-0 text-xl">
                    <h3 className='text-3xl mb-3'>Contact</h3>
                    <div className="flex flex-col gap-2 text-[1rem]">
                        <p>
                            55 East Allen Ave. Brooklyn, New York 11201
                        </p>
                        <p>contact@interno.com</p>
                        <p>+234 809 1234 5678</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
