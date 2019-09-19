import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import HeroSlider from '../components/index/HeroSlider'
import CTAImages from '../components/index/CTAImages'
import LatestTrend from '../components/index/LatestTrend'
import Citat from '../components/index/Citat'
import About from '../components/index/About'

const Index = () => {
    return (
        <Layout>
            <SEO title='Home' keywords={['tango', 'brand', 'alliance']}/>
            <HeroSlider/>
            <CTAImages/>
            <LatestTrend/>
            <Citat/>
            <About/>
        </Layout>
    )
}

export default Index


