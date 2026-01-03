import React from 'react'
// import { assets } from '../assets/assets'
import MainLogo from "../assets/MainLogo.png"
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={MainLogo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>We are an India-based exporter of disposable products supplying food packaging, tissue paper, edible disposables, and other utility disposable items to overseas markets.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            {/* <li>Home</li>
            <li>About us</li>
            <li>Products</li>
            <li>Privacy policy</li> */}
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About us</li></Link>
            <Link to='/products'><li>Products</li></Link>
            <Link to='/contact'><li>Contact us</li></Link>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><a href="tel:+917990966295">📞 +91-799-096-6295</a></li>
            <li><a href="mailto:contact@pragatiexim.com?subject=Business%20Inquiry&body=Hello%20Team,">📧 contact@pragatiexim.com</a></li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>© {new Date().getFullYear()} Pragati Exim & Trade - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
