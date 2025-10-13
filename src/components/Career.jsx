import React, { useState } from 'react';
import { logo } from '../assets';
import styles from '../style';

const Career = () => {
  const [activeTab, setActiveTab] = useState('positions');

  const jobPositions = [
    {
      id: 1,
      title: "Senior React Developer",
      department: "Frontend Development",
      location: "Indore, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "We're looking for a passionate React developer to join our frontend team and build amazing user experiences.",
      requirements: [
        "Strong experience with React.js and modern JavaScript",
        "Proficiency in HTML5, CSS3, and responsive design",
        "Experience with state management libraries (Redux, Zustand)",
        "Knowledge of modern build tools (Webpack, Vite)",
        "Experience with testing frameworks (Jest, React Testing Library)"
      ],
      benefits: [
        "Competitive salary package",
        "Health insurance coverage",
        "Flexible working hours",
        "Professional development opportunities",
        "Team building activities"
      ]
    },
    {
      id: 2,
      title: "Python Developer",
      department: "Backend Development",
      location: "Indore, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Join our backend team to develop scalable Python applications and work with cutting-edge technologies.",
      requirements: [
        "Strong Python programming skills",
        "Experience with Django/Flask frameworks",
        "Knowledge of RESTful API development",
        "Database design and optimization",
        "Experience with cloud platforms (AWS, Azure)"
      ],
      benefits: [
        "Competitive salary package",
        "Health insurance coverage",
        "Flexible working hours",
        "Professional development opportunities",
        "Team building activities"
      ]
    },
    {
      id: 3,
      title: "Mobile App Developer",
      department: "Mobile Development",
      location: "Indore, India",
      type: "Full-time",
      experience: "2-3 years",
      description: "Create innovative mobile applications using React Native and contribute to our growing mobile portfolio.",
      requirements: [
        "Experience with React Native development",
        "Knowledge of iOS and Android platforms",
        "Understanding of mobile UI/UX principles",
        "Experience with mobile testing and debugging",
        "Knowledge of app store deployment processes"
      ],
      benefits: [
        "Competitive salary package",
        "Health insurance coverage",
        "Flexible working hours",
        "Professional development opportunities",
        "Team building activities"
      ]
    },
    {
      id: 4,
      title: "AI/ML Engineer",
      department: "Artificial Intelligence",
      location: "Indore, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Work on cutting-edge AI and machine learning projects that solve real-world problems.",
      requirements: [
        "Strong background in machine learning algorithms",
        "Experience with Python ML libraries (TensorFlow, PyTorch)",
        "Knowledge of data preprocessing and feature engineering",
        "Experience with cloud ML platforms",
        "Understanding of deep learning concepts"
      ],
      benefits: [
        "Competitive salary package",
        "Health insurance coverage",
        "Flexible working hours",
        "Professional development opportunities",
        "Team building activities"
      ]
    }
  ];

  const companyBenefits = [
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "We offer market-competitive salaries with performance-based bonuses"
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive health insurance coverage for you and your family"
    },
    {
      icon: "⏰",
      title: "Flexible Hours",
      description: "Work-life balance with flexible working hours and remote options"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Continuous learning opportunities with courses and certifications"
    },
    {
      icon: "🎯",
      title: "Career Growth",
      description: "Clear career progression paths and mentorship programs"
    },
    {
      icon: "🎉",
      title: "Team Events",
      description: "Regular team building activities and company events"
    }
  ];

  const companyCulture = [
    "Innovation-driven environment",
    "Collaborative team spirit",
    "Continuous learning culture",
    "Work-life balance focus",
    "Diversity and inclusion",
    "Open communication"
  ];

  return (
    <section id="career" className={`${styles.paddingY} bg-primary relative overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-gradient rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-gradient rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white-gradient rounded-full opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className={`${styles.boxWidth} mx-auto relative z-10`}>
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img 
                src={logo} 
                alt="ClumpCoder Logo" 
                className="w-20 h-20 logo-animated career-logo"
              />
              <div className="absolute inset-0 bg-blue-gradient rounded-full opacity-30 animate-ping"></div>
            </div>
          </div>
          
          <h2 className={`${styles.heading2} mb-4 career-title`}>
            <span className="text-gradient">Join Our Team</span>
          </h2>
          <p className={`${styles.paragraph} max-w-2xl mx-auto career-subtitle`}>
            Be part of an innovative team that's shaping the future of technology. We're always looking for talented individuals to join our journey.
          </p>
          
          {/* Animated divider */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent career-divider"></div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-1 career-tabs">
            <button
              onClick={() => setActiveTab('positions')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'positions'
                  ? 'bg-blue-gradient text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Open Positions
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'benefits'
                  ? 'bg-blue-gradient text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Benefits & Culture
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'positions' && (
          <div className="space-y-8 career-positions">
            {jobPositions.map((job, index) => (
              <div 
                key={job.id}
                className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-all duration-300 career-job-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 px-6 py-3 bg-blue-gradient text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-400 mb-6">{job.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-gray-400">
                          <svg className="w-4 h-4 mr-2 mt-1 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-gray-400">
                          <svg className="w-4 h-4 mr-2 mt-1 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'benefits' && (
          <div className="career-benefits">
            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {companyBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-750 transition-all duration-300 benefit-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Company Culture */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Company Culture</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {companyCulture.map((value, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 culture-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <svg className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 career-cta">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Perfect Role?</h3>
            <p className="text-gray-400 mb-6">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-blue-gradient text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Send Your Resume
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
