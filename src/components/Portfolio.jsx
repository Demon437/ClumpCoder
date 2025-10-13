import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import portfolioImage1 from '../assets/image 1.jpg';
import invoiceImage from '../assets/image invoice.jpg';
import wqInvoiceImage from '../assets/WQ invoice app.jpg';
import kidsImage from '../assets/kids.jpg';
import mobileImage1 from '../assets/mobile 1.jpg';
import mobileImage from '../assets/mobile 2.0.jpg';
import mobileImage4 from '../assets/mobile 4.0.jpg';
import erpImage2 from '../assets/image erp 2.jpg';
import styles from '../style';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "KUHOO - Online Education",
      image: portfolioImage1,
      description: "At Kuhoo, we believe that providing the right loan at the right time can positively transform not just the life of a student but also uplift their entire family.",
      link: "/kuhoo"
    },
    
    {
      id: 2,
      title: "Eduacademy",
      image: invoiceImage,
      description: "Enhanced efficiency in school operations. High client satisfaction with robust features. Market recognition as a trusted ERP solution.",
      link: "/eduacademy"
    },
    {
      id: 3,
      title: "WQ Invoice App",
      image: wqInvoiceImage,
      description: "Easy Invoice App – Generate and send professional PDF invoices and draft orders. Customize templates with your logo and store details, bulk print/export, and automate.",
      link: "/wq-invoice-app"
    },
    {
      id: 4,
      title: "TRILINGUAL KIDS ACADEMY",
      image: kidsImage,
      description: "A digital solution where teachers and students connect online. Upload assignments, complete them virtually, and evaluate performance directly.",
      link: "/trilingual"
    },
    {
      id: 5,
      title: "Math Quiz",
      image: mobileImage1,
      description: "Interactive and fun learning with games and quizzes that turn ordinary math practice into an exciting adventure.",
      link: "/math-quiz"
    },
    {
      id: 6,
      title: "Mufo-App",
      image: mobileImage4,
      description: "An innovative platform designed to make learning smart, interactive, and fun with tools and resources for better understanding.",
      link: "/mufo-app"
    },
    {
      id: 7,
      title: "ERP System Development",
      image: erpImage2,
      description: "Custom ERP system for a manufacturing company, increasing efficiency by 40%.",
      link: "/erp-system"
    }
  ];


  return (
    <section id="portfolio" className={`${styles.paddingY} bg-primary relative overflow-hidden`}>

      <div className={`${styles.boxWidth} mx-auto relative z-10 mb-10`}>
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img 
                src={logo} 
                alt="ClumpCoder Logo" 
                className="w-20 h-20 logo-animated portfolio-logo"
              />
              <div className="absolute inset-0 bg-blue-gradient rounded-full opacity-30 animate-ping"></div>
            </div>
          </div>
          
          <h2 className={`${styles.heading2} mb-4 portfolio-title`}>
            <span className="text-gradient">Our Portfolio</span>
          </h2>
          <p className={`${styles.paragraph} max-w-2xl mx-auto portfolio-subtitle`}>
            Explore our successful projects and innovative solutions that have transformed businesses across various industries.
          </p>
          
          {/* Animated divider */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent portfolio-divider"></div>
          </div>
        </div>

        {/* Static three-card layout matching screenshot */}

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id} 
              className="portfolio-item bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={`w-full ${index <= 2 ? 'h-64' : 'h-48'} object-cover transition-transform duration-300 hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <Link 
                    to={item.link}
                    className="inline-flex items-center px-4 py-2 bg-blue-gradient text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-200 mb-4">{item.description}</p>
                {/* tech badges removed for simpler look */}
              </div>
            </div>
          ))}
        </div>

        {/* CTA removed per request */}
      </div>
    </section>
  );
};

export default Portfolio;