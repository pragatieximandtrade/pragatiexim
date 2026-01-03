import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'
import { FaWhatsapp } from "react-icons/fa";

const ProductPreview = () => {

    const { productId } = useParams()
    const { products, currencySymbol } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const [productInfo, setProductInfo] = useState(null)
    const [productSlots, setProductSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const fetchProductInfo = async () => {
        const productInfo = products.find((product) => product._id === productId)
        setProductInfo(productInfo)
    }

    const getAvailableSlots = async () => {
        setProductSlots([])

        // getting current date
        let today = new Date()

        for (let i = 0; i < 7; i++) {
            // getting date with index 
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            // setting end time of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)

            // setting hours 
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            let timeSlots = []

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

                // Add slot to array
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                })

                // Increment current time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }

            setProductSlots(prev => ([...prev, timeSlots]))
        }
    }

    const bookAppointment = async () => {
        const date = productSlots[slotIndex][0].datetime

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        const slotDate = `${day}_${month}_${year}`
        console.log(slotDate, slotTime)
    }

    useEffect(() => {
        if (products.length > 0) {
            fetchProductInfo()
        }
    }, [products, productId])

    useEffect(() => {
        if (productInfo) {
            getAvailableSlots()
        }
    }, [productInfo])

    const handleWhatsAppInquiry = () => {
        const phoneNumber = "+917990966295"; // ✅ Your WhatsApp number (with country code)

        const message = `Hello Pragati Exim,

I am interested in the following product:

Product Name: ${productInfo.name}
Category: ${productInfo.category}

Please share price, MOQ, and delivery details.

Thank you.
    `;

        const encodedMessage = encodeURIComponent(message);

        window.open(
            `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
            "_blank"
        );
    };


    return productInfo ? (
        <div>
            {/* ---------- Product Details ----------- */}
            <div className='flex flex-col sm:flex-row gap-4'>
                <div>
                    {/* <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={productInfo.image} alt="" /> */}
                    <img className='bg-blue-50 w-full sm:max-w-72 rounded-lg' src={productInfo.image} alt="" />
                </div>

                <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                    {/* ----- Product Info : name, degree, experience ----- */}
                    <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
                        {productInfo.name}
                        {/* <img className='w-5' src={assets.verified_icon} alt="" /> */}
                    </p>
                    <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                        <p>{productInfo.category}</p>
                        {/* <button className='py-0.5 px-2 border text-xs rounded-full'>{productInfo.experience}</button> */}
                    </div>

                    {/* ----- Product About ----- */}
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
                            Size:
                        </p>
                        <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{productInfo.size.line1}</p>
                        <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{productInfo.size.line2}</p>
                        <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{productInfo.size.line3}</p>
                    </div>

                    <p className='text-gray-500 font-medium mt-4'>
                        Carton Size: <span className='text-gray-600'>{productInfo.carton_size}</span>
                    </p>

                    <p className='text-gray-500 font-medium mt-4'>
                        G. W.: <span className='text-gray-600'>{productInfo.gw}</span>
                    </p>

                    <p className='text-gray-500 font-medium mt-4'>
                        PCS/CTN: <span className='text-gray-600'>{productInfo.pc}</span>
                    </p>

                    <button
                        onClick={handleWhatsAppInquiry}
                        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2"
                    >
                        <FaWhatsapp size={20} />
                        WhatsApp Inquiry
                    </button>

                </div>
            </div>

            {/* Booking slots */}
            {/* <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
                <p>Booking slots</p>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {productSlots.length && productSlots.map((item, index) => (
                        <div
                            onClick={() => setSlotIndex(index)}
                            key={index}
                            className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}
                        >
                            <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                            <p>{item[0] && item[0].datetime.getDate()}</p>
                        </div>
                    ))}
                </div>

                <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                    {productSlots.length && productSlots[slotIndex].map((item, index) => (
                        <p
                            onClick={() => setSlotTime(item.time)}
                            key={index}
                            className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`}
                        >
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>

                <button
                    onClick={bookAppointment}
                    className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'
                >
                    Book an appointment
                </button>
            </div> */}

            {/* Listing Related Products */}
            <RelatedProducts category={productInfo.category} productId={productId} />
        </div>
    ) : null
}

export default ProductPreview
