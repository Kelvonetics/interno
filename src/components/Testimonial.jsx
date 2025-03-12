import test_1 from '../assets/testimonial/01.png';
import test_2 from '../assets/testimonial/02.png';
import test_3 from '../assets/testimonial/03.png';
import test_4 from '../assets/testimonial/04.png';
import { RiUser3Line } from '@remixicon/react';



const Testimonial = () => {
  return (
    <section className='mt-[150px] lg:mt-[220px] container mx-auto z-20' id='testimonial'>
      <h1 className='text-4xl font-semibold mb-12 text-center'>What our Client Says</h1>

      <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center gap-8 h-full overflow-hidden">
        
        <div className='slide slide-1'>
          <div className="title">
            <img src={test_1} alt="client 1" className='w-14' />

            <div className="">
              <h2 className='text-xl font-medium'>Nattasha Mith</h2>
              <span className='text-sm text-grey-300'>Greenville, USA</span>
            </div>
          </div>

          <div className="mt-8 text-lg ">
            Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.
          </div>

          <div className="mt-4 text-center">
            <span className='flex items-center justify-center gap-3 bg-accent text-white px-5 py-3 rounded-full text-sm '>
              <RiUser3Line size={15} />
              Home Owner
            </span>
          </div>
        </div>
        
        <div className='slide slide-1'>
          <div className="title">
            <img src={test_2} alt="client 2" className='w-14' />

            <div className="">
              <h2 className='text-xl font-medium'>Jessica White</h2>
              <span className='text-sm text-grey-300'>Oak Ridge, USA</span>
            </div>
          </div>

          <div className="mt-8 text-lg ">
            Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.
          </div>

          <div className="mt-4 text-center">
            <span className='flex items-center justify-center gap-3 bg-accent text-white px-5 py-3 rounded-full text-sm '>
              <RiUser3Line size={15} />
              Tenant
            </span>
          </div>
        </div>
        
        <div className='slide slide-1'>
          <div className="title">
            <img src={test_3} alt="client 1" className='w-14' />

            <div className="">
              <h2 className='text-xl font-medium'>Mike Davis</h2>
              <span className='text-sm text-grey-300'>Berlin, Germany</span>
            </div>
          </div>

          <div className="mt-8 text-lg ">
            Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.
          </div>

          <div className="mt-4 text-center">
            <span className='flex items-center justify-center gap-3 bg-accent text-white px-5 py-3 rounded-full text-sm '>
              <RiUser3Line size={15} />
              Real Estate Developer
            </span>
          </div>
        </div>
        
        <div className='slide slide-1'>
          <div className="title">
            <img src={test_4} alt="client 5" className='w-14' />

            <div className="">
              <h2 className='text-xl font-medium'>Olivia Wilson</h2>
              <span className='text-sm text-grey-300'>Blue Ridge, France</span>
            </div>
          </div>

          <div className="mt-8 text-lg ">
            Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.
          </div>

          <div className="mt-4 text-center">
            <span className='flex items-center justify-center gap-3 bg-accent text-white px-5 py-3 rounded-full text-sm '>
              <RiUser3Line size={15} />
              Home Interior Expect
            </span>
          </div>
        </div>
       
      </div>
        
    </section>
  )
}

export default Testimonial