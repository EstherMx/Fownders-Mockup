import React from 'react'
import Link from 'gatsby-link'
import Slideshow from '../components/Slideshow/slideshow';
import Navbar from '../components/Navbar/navbar';
import Banner from '../components/Banner/banner';
import Mission from '../components/Mission/mission';

const IndexPage = () => (
  <div>
  <Slideshow />
  <Banner />
    
    <Link to="/donate/">Donate</Link>
  </div>
)
// navbar: action
// Slideshow: action
// button for VideoIntro: action
// Our Mission: action
// About Us: action
// Team: action
// Contact Form: action 
// Donate button: action
// Footer: action


export default IndexPage
