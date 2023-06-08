import React from 'react'
import Header from '../../components/header'
import Hero from '../../components/hero'
import LatestNews from '../../components/latestNews'
import Footer from '../../components/footer'

const Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <LatestNews/>
            <Footer/>
        </div>
    )
}

export default Home