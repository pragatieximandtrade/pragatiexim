import React from 'react'
import { assets } from '../assets/assets'
import new_about_image from '../assets/new_about_image.png'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={new_about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>We are an India-based exporter specializing in disposable products for international markets. Our product range includes disposable food packaging, paper cups, tissue paper products, edible disposable items, and various utility disposables supplied to global buyers.</p>
          <p>Our objective is to support international importers and distributors with reliable sourcing of disposable products. We focus on export-ready quality, consistent supply, and long-term business relationships.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision is to become a dependable global sourcing partner for disposable products by offering wide product coverage, quality-focused supply, and flexible export solutions.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENT SUPPLY:</b>
          <p>Streamlined sourcing and export processes that help buyers procure disposable products efficiently and reliably.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>WIDE PRODUCT COVERAGE: </b>
          <p>Access to a broad range of disposable product categories including packaging, tissue paper, edible and utility disposables through a single export partner.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CUSTOM SOLUTIONS:</b>
          <p >Buyer-specific product selection, custom branding, and flexible packaging options aligned with international market requirements.</p>
        </div>
      </div>

    </div>
  )
}

export default About
