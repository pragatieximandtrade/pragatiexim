import React from 'react'
import Header from '../components/Header'
import TopProducts from '../components/TopProducts'
import Banner from '../components/Banner'
// import SpecialityMenu from '../components/SpecialityMenu'

const Home = () => {
  return (
    <div>
      <Header />
      {/* <SpecialityMenu /> */}
      <TopProducts />
      <Banner />
    </div>
  )
}

export default Home