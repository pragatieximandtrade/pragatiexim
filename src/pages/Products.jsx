import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Products = () => {

  const { category } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { products } = useContext(AppContext)

  const applyFilter = () => {
    if (category) {
      setFilterDoc(products.filter(doc => doc.category === category))
    } else {
      setFilterDoc(products)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [products, category])

  return (
    <div>
      <p className='text-gray-600'>Browse through the products catagory.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => category === 'soup cup' ? navigate('/products') : navigate('/products/soup cup')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'soup cup' ? 'bg-indigo-100 text-black ' : ''}`}>SOUP CUP</p>
          <p onClick={() => category === 'paper cup' ? navigate('/products') : navigate('/products/paper cup')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'paper cup' ? 'bg-indigo-100 text-black ' : ''}`}>PAPER CUP</p>
          <p onClick={() => category === 'ice cream paper cup' ? navigate('/products') : navigate('/products/ice cream paper cup')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'ice cream paper cup' ? 'bg-indigo-100 text-black ' : ''}`}>ICE CREAM PAPER CUP</p>
          <p onClick={() => category === 'paper bowl' ? navigate('/products') : navigate('/products/paper bowl')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'paper bowl' ? 'bg-indigo-100 text-black ' : ''}`}>PAPER BOWL</p>
          <p onClick={() => category === 'lid' ? navigate('/products') : navigate('/products/lid')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'lid' ? 'bg-indigo-100 text-black ' : ''}`}>LID</p>
          <p onClick={() => category === 'paper box' ? navigate('/products') : navigate('/products/paper box')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'paper box' ? 'bg-indigo-100 text-black ' : ''}`}>PAPER BOX</p>
          <p onClick={() => category === 'salad box' ? navigate('/products') : navigate('/products/salad box')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'salad box' ? 'bg-indigo-100 text-black ' : ''}`}>SALAD BOX</p>
          <p onClick={() => category === 'paper tray' ? navigate('/products') : navigate('/products/paper tray')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'paper tray' ? 'bg-indigo-100 text-black ' : ''}`}>PAPER TRAY</p>
          <p onClick={() => category === 'paper bag' ? navigate('/products') : navigate('/products/paper bag')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'paper bag' ? 'bg-indigo-100 text-black ' : ''}`}>PAPER BAG</p>
          <p onClick={() => category === 'non woven bag' ? navigate('/products') : navigate('/products/non woven bag')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'non woven bag' ? 'bg-indigo-100 text-black ' : ''}`}>NON-WOVEN BAG</p>
          <p onClick={() => category === 'noodle box' ? navigate('/products') : navigate('/products/noodle box')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'noodle box' ? 'bg-indigo-100 text-black ' : ''}`}>NOODLE BOX</p>
          <p onClick={() => category === 'pizza box' ? navigate('/products') : navigate('/products/pizza box')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'pizza box' ? 'bg-indigo-100 text-black ' : ''}`}>PIZZA BOX</p>
          <p onClick={() => category === 'popcorn bucket' ? navigate('/products') : navigate('/products/popcorn bucket')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'popcorn bucket' ? 'bg-indigo-100 text-black ' : ''}`}>POPCORN BUCKET</p>
          <p onClick={() => category === 'chicken box' ? navigate('/products') : navigate('/products/chicken box')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'chicken box' ? 'bg-indigo-100 text-black ' : ''}`}>CHICKEN BOX</p>
          {/* <p onClick={() => category === 'paper cone' ? navigate('/products') : navigate('/products/paper cone')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'paper cone' ? 'bg-indigo-100 text-black ' : ''}`}>PAPER CONE</p> */}
          {/* <p onClick={() => category === 'Gastroenterologist' ? navigate('/products') : navigate('/products/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'Gastroenterologist' ? 'bg-indigo-100 text-black ' : ''}`}>Gastroenterologist</p>
          <p onClick={() => category === 'Gastroenterologist' ? navigate('/products') : navigate('/products/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'Gastroenterologist' ? 'bg-indigo-100 text-black ' : ''}`}>Gastroenterologist</p>
          <p onClick={() => category === 'Gastroenterologist' ? navigate('/products') : navigate('/products/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'Gastroenterologist' ? 'bg-indigo-100 text-black ' : ''}`}>Gastroenterologist</p>
          <p onClick={() => category === 'Gastroenterologist' ? navigate('/products') : navigate('/products/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${category === 'Gastroenterologist' ? 'bg-indigo-100 text-black ' : ''}`}>Gastroenterologist</p> */}
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/product/${item._id}`); window.scrollTo(0, 0) }} className='border border-indigo-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-indigo-50' src={item.image} alt="" />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                </div>
                <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                <p className='text-zinc-600 text-sm'>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products