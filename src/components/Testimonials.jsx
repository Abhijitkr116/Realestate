import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

function Testimonials() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 400 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='pb-20' id='Testimonials'>

            <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32  w-full overflow-hidden'>
                <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonial</span></h1>
                <p className='text-center  mx-auto text-gray-500 mb-8 max-w-80'>Real Stories from Those Who Found Home with Us</p>
            </div>
            <div className='flex flex-wrap justify-center gap-8'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='max-w-[340px] border border-gray-100 shadow-lg rounded px-8 py-12 text-center'>
                        <img src={testimonial.image} alt={testimonial.alt} className='w-20 h-20 rounded-full mx-auto mb-4' />
                        <h2 className='text-gray-700 text-xl font-medium'>{testimonial.name}</h2>
                        <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({ length: testimonial.rating }).map((item, index) => (
                                <img key={index} src={assets.star_icon} alt="" />
                            ))}
                        </div>
                        <p className='text-gray-600'>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testimonials