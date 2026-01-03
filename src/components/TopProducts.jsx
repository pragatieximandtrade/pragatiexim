// import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'

// const TopProducts = () => {
    
//     const navigate = useNavigate()
//     const { products } = useContext(AppContext)

//     return (
//         <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
//             <h1 className='text-3xl font-medium'>Our Key Export Products</h1>
//             <p className='sm:w-1/3.5 text-center text-sm'>Our catalog includes multiple disposable product categories and can be extended based on buyer requirements.</p>
//             <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
//                 {products.slice(0, 10).map((item, index) => (
//                     <div
//                         onClick={() => {
//                             navigate(`/product/${item._id}`);
//                             window.scrollTo(0, 0)
//                         }}
//                         className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
//                         key={index}
//                     >
//                         <img className='bg-blue-50' src={item.image} alt="" />
//                         <div className='p-4'>
//                             {/* <div className='flex items-center gap-2 text-sm text-center text-green-500'>
//                                 <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
//                             </div> */}
//                             <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//                             <p className='text-gray-600 text-sm'>{item.category}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <button onClick={() => { navigate('/products'); scrollTo(0, 0) }} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
//         </div>
//     )
// }

// export default TopProducts



import React, { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopProducts = () => {

    const navigate = useNavigate()
    const { products } = useContext(AppContext)

    // Get first product of each category
    const categoryProducts = useMemo(() => {
        const map = new Map()

        products.forEach((product) => {
            if (!map.has(product.category)) {
                map.set(product.category, product)
            }
        })

        return Array.from(map.values())
    }, [products])

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Our Key Export Products</h1>
            <p className='sm:w-1/3.5 text-center text-sm'>
                Our catalog includes multiple disposable product categories and can be extended based on buyer requirements.
            </p>

            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {categoryProducts.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => {
                             navigate(`/products/${item.category}`);
                             window.scrollTo(0, 0)
                         }}
                        // onClick={() => {
                        //     navigate(`/products?category=${item.category}`)
                        //     window.scrollTo(0, 0)
                        // }}
                        className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
                    >
                        <img className='bg-blue-50' src={item.image} alt="" />
                        <div className='p-4'>
                             {/* <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                 <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                             </div> */}
                             <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                             <p className='text-gray-600 text-sm'>{item.category}</p>
                         </div>
                    </div>
                ))}
            </div>

            <button
                onClick={() => {
                    navigate('/products')
                    window.scrollTo(0, 0)
                }}
                className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'
            >
                more
            </button>
        </div>
    )
}

export default TopProducts
