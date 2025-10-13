import React from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  Career,
  Clients, 
  Contact,
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Portfolio,
  Stats, 
  Testimonials,
  Map
} from './components'
import styles from './style'
import OurTechnology from './components/OurTechnology'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      {/* Home Section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      
      {/* Main Content Sections */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* About Us Section */}
          <Stats/>
          <Business/>
          <Billing/>
          
          {/* Portfolio Section */}
          <Portfolio/>
          
          {/* Services Section */}
          <OurTechnology/>  
          {/* <Testimonials/> */}
          {/* <Clients/> */}
          {/* <CTA/> */}
          
          {/* Career Section */}
          {/* <Career/> */}
          
          {/* Contact Section */}
          <div className="mt-20">
            <Contact/>
          </div>
          <Map/>
        </div>
      </div>
      
      {/* Footer - Full Width */}
      <Footer/>
    </div>
  )
}

export default App