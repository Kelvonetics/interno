import { RiCheckFill, RiSettings3Line, RiCloseLine, RiWirelessChargingLine, RiBuilding2Line } from '@remixicon/react'
import React from 'react'

const Pricing = () => {
  return (
    <section className='footer z-20 mt-[80px] lg:mt-[150px]'>
        <div className="container mx-auto px-0">

            <h1 className='text-4xl font-normal mb-11 text-center'>See Our Price List</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3rem] lg:gap-[4rem]">
                <div className="grid_item border border-accent w-full rounded-2xl px-9 py-8">
                    <div className="flex justify-center gap-5">
                        <RiSettings3Line size={45} className='text-accent' />
                        <h3 className='text-4xl text-center'>Basic</h3>
                    </div>

                    <div className="mt-11 flex flex-col gap-5">
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>Decorations</span>
                            <span><RiCheckFill size={25} className='text-accent' /></span>
                        </div>
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>Wall Painting</span>
                            <span><RiCheckFill size={25} className='text-accent' /></span>
                        </div>
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>Arts & Design</span>
                            <span><RiCheckFill size={25} className='text-accent' /></span>
                        </div>
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>Lightings</span>
                            <span><RiCloseLine size={25} className='text-red-400' /></span>
                        </div>
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>CCTV Cameras</span>
                            <span><RiCloseLine size={25} className='text-red-400' /></span>
                        </div>
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>Solar Powering</span>
                            <span><RiCloseLine size={25} className='text-red-400' /></span>
                        </div>
                    </div>
                    
                </div>
                
                <div className="grid_item border border-accent w-full rounded-2xl px-9 py-8">
                    <div className="flex justify-center gap-5">
                        <RiWirelessChargingLine size={45} className='text-accent' />
                        <h3 className='text-4xl text-center'>Standard</h3>
                    </div>

                    <div className="mt-11 flex flex-col gap-5">
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>Decorations</span>
                            <span><RiCheckFill size={25} className='text-accent' /></span>
                        </div>
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>Wall Painting</span>
                            <span><RiCheckFill size={25} className='text-accent' /></span>
                        </div>
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>Arts & Design</span>
                            <span><RiCheckFill size={25} className='text-accent' /></span>
                        </div>
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>Lightings</span>
                            <span><RiCheckFill size={25} className='text-accent' /></span>
                        </div>
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>CCTV Cameras</span>
                            <span><RiCloseLine size={25} className='text-red-400' /></span>
                        </div>
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>Solar Powering</span>
                            <span><RiCloseLine size={25} className='text-red-400' /></span>
                        </div>
                    </div>
                    
                </div>
                
                <div className="grid_item border border-accent w-full rounded-2xl px-9 py-8">
                    <div className="flex justify-center gap-5">
                        <RiBuilding2Line size={45} className='text-accent' />
                        <h3 className='text-4xl text-center'>Premium</h3>
                    </div>

                    <div className="mt-11 flex flex-col gap-5">
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>Decorations</span>
                            <span><RiCheckFill size={25} className='text-accent' /></span>
                        </div>
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>Wall Painting</span>
                            <span><RiCheckFill size={25} className='text-accent' /></span>
                        </div>
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>Arts & Design</span>
                            <span><RiCheckFill size={25} className='text-accent' /></span>
                        </div>
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>Lightings</span>
                            <span><RiCheckFill size={25} className='text-accent' /></span>
                        </div>
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>CCTV Cameras</span>
                            <span><RiCheckFill size={25} className='text-accent' /></span>
                        </div>
                        <div className='flex justify-between bg-accent-secondary px-6 py-3 rounded-xl'>
                            <span>Solar Powering</span>
                            <span><RiCheckFill size={25} className='text-accent' /></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing