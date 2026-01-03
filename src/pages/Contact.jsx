import React from 'react'
import { assets } from '../assets/assets'
import { FaWhatsapp } from "react-icons/fa";
import new_contact_image from '../assets/new_contact_image.png'

const handleWhatsAppInquiry = () => {
  const phoneNumber = "+917990966295"; // ✅ Your WhatsApp number (with country code)

  const message = `Hello Pragati Exim,

I would like to know more about your products and services.
Please contact me with details.

Thank you.
    `;

  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    "_blank"
  );
};

const Contact = () => {

  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={new_contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>102 Gopinath Complex <br /> Surat, Gujarat, India</p>
          <p className=' text-gray-500'><a href="tel:+917990966295">Tel: +91 79909 66295</a> <br /> <a href="mailto:contact@pragatiexim.com?subject=Business%20Inquiry&body=Hello%20Team,">Email: contact@pragatiexim.com</a></p>
          <button
            onClick={handleWhatsAppInquiry}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2"
          >
            <FaWhatsapp size={20} />
            WhatsApp Us
          </button>
        </div>
      </div>

    </div>
  )
}

export default Contact
