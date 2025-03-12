import { RiArrowRightSLine } from '@remixicon/react'
import blog_1 from '../assets/news/01.png'
import blog_2 from '../assets/news/02.png'
import blog_3 from '../assets/news/03.png'

const Blog = () => {
  return (
    <section className='z-20 mt-[80px] lg:mt-[150px]' id='blog'>
        <div className="container mx-auto py-0">
            <h1 className="text-4xl font-normal mb-3 text-center">
                Articles & News
            </h1>

            <p className='mb-10 text-lg max-w-[550px] text-center mx-auto'>
            It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layouts the points of using.
            </p>

            <div className="blog__grid grid grid-cols-1 lg:grid-cols-3 gap-[27px]">
              <div className="grid__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer ease-in-out duration-300 mx-auto lg:mx-0">
                <img src={blog_1} alt="News img" />
                <div className="flex flex-col gap-[30px]">
                  <h3 className='text-lg font-[550] mt-4'>
                    Let’s Get Solution For Building Construction Work
                  </h3>

                  <div className="flex justify-between items-center">
                    <p className='text-base'>22 June,2024</p>
                    <button className='bg-accent-secondary w-[38px] h-[38px] rounded-full group-hover:bg-white transition-all duration-300'>
                      <RiArrowRightSLine size={32} className='text-gray-500 pl-1' />
                    </button>
                  </div>
                </div>
              </div>


              <div className="grid__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer ease-in-out duration-300 mx-auto lg:mx-0">
                <img src={blog_2} alt="News img 2" />
                <div className="flex flex-col gap-[30px]">
                  <h3 className='text-lg font-[550] mt-4'>
                    Low Cost Latest Invented Interior Designing
                  </h3>

                  <div className="flex justify-between items-center">
                    <p className='text-base'>24 June,2024</p>
                    <button className='bg-accent-secondary w-[38px] h-[38px] rounded-full group-hover:bg-white transition-all duration-300'>
                      <RiArrowRightSLine size={32} className='text-gray-500 pl-1' />
                    </button>
                  </div>
                </div>
              </div>


              <div className="grid__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer ease-in-out duration-300 mx-auto lg:mx-0">
                <img src={blog_3} alt="News img 3" />
                <div className="flex flex-col gap-[30px]">
                  <h3 className='text-lg font-[550] mt-4'>
                    Best For Any Office & Business Interior
                  </h3>

                  <div className="flex justify-between items-center">
                    <p className='text-base'>29 June,2024</p>
                    <button className='bg-accent-secondary w-[38px] h-[38px] rounded-full group-hover:bg-white transition-all duration-300'>
                      <RiArrowRightSLine size={32} className='text-gray-500 pl-1' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
    </section>
  )
}

export default Blog