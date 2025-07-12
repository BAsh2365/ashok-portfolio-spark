import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Mail, MapPin, ExternalLink, Github, Settings, Home, Zap, DollarSign, Tv, Database, BarChart3, Brain, Code2, CheckCircle, Ship, Infinity, TrendingUp, GitBranch, ScatterChart, HardDrive, PieChart, Cloud, GraduationCap, MapPin as LocationOn, Languages, Send } from 'lucide-react';

const Index = () => {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Systems-Engineering AI chatbot",
      description: "Leveraged AI systems, API keys, software engineering principles, and systems engineering concepts to make an end-to-end MBSE chatbot application based on Systems Engineering Research, through the Virginia Tech Hume Center, and development goals.",
      icon: <Settings className="text-coffee-600" />,
      tags: ["Python", "Relational Databases", "Graph Databases", "Docker", "Azure", "Software diagramming", "AI"]
    },
    {
      title: "Real Estate Data Program", 
      description: "Developed a Python script in Jupyter Notebook that leveraged Python Pandas, asyncio, Playwright, and Excel Output for webscrapping in order to catagorize and analyze Real Estate Housing Data in the Atlanta Area.",
      icon: <Home className="text-coffee-600" />,
      tags: ["Pandas Dataframes", "Web Scrapping", "Excel", "Data Analysis"]
    },
    {
      title: "NBA Case Study: Data Prediction and Analysis",
      description: "Built a simple linear regression model with 7-8 features (NBA stats and Advanced stat metrics) based on Webscrapped data from Basketball Reference on game splits for the 2025 season. Gathered Metrics of predicted data, outputted to a CSV, and built a dashboard in Tableau showing different statistical comparisons.",
      icon: <Zap className="text-coffee-600" />,
      tags: ["Sci-Kit-Learn", "Python", "Linear-Regression", "Data Visualization in Tableau", "Webscrapping", "Data Storytelling"]
    },
    {
      title: "Financial Analysis: Sony Corporation",
      description: "Looked at financial data (Revenue, Profits, and Earnings Per share) for the Sony Corporation (SONY) from 2020-2024 and analyzing the company's finances while making suggestions for potential improvement and future company projections.",
      icon: <DollarSign className="text-coffee-600" />,
      tags: ["Python", "APIs", "Matplotlib", "Fundamental understanding of lists and list comprehensions"]
    },
    {
      title: "Condensed Media: Online Branding and Social Media Page",
      description: "Started a Website in 2021 titled condensed sports, eventually making it a multi-disciplinary personal brand for sports and pop culture. Features a podcast, Instagram page, and website discussing all things sports/pop culture.",
      icon: <Tv className="text-coffee-600" />,
      tags: ["Social Media Marketing", "Website optimization", "Podcasting", "Sports Analytics and Research"]
    },
    {
      title: "Multiple Linear Regression in R",
      description: "MLR in R using cross-validation, ridge regression, etc. Shows how the number of touchdowns for an Atlanta Falcons player is affected by multiple factors.",
      icon: <Database className="text-coffee-600" />,
      tags: ["R", "Regression (Ridge, Lasso, MLR, etc)", "Data Analysis"]
    }
  ];

  const skills = [
    {
      title: "Data Science",
      icon: <BarChart3 className="text-coffee-600 text-2xl" />,
      items: [
        "Statistical Analysis (Python & R)",
        "Data Visualization",
        "Product Research & Insight",
        "Predictive Modeling",
        "Data Cleaning & Preprocessing"
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="text-coffee-600 text-2xl" />,
      items: [
        "Supervised Learning",
        "Unsupervised Learning", 
        "Regression Testing",
        "Natural Language Processing",
        "Data Retrieval & Fine-Tuning"
      ]
    },
    {
      title: "Software Engineering",
      icon: <Code2 className="text-coffee-600 text-2xl" />,
      items: [
        "Python, Javascript (Node.js), Typescript (NestJS), SQL, Neo4j",
        "Software Architecture & Design Patterns",
        "Git, Docker",
        "Cloud Services (Azure, AWS, Railway)",
        "APIs, AI (RAG), Python libraries, Research"
      ]
    }
  ];

  const tools = [
    { name: "Docker", icon: <Ship className="text-coffee-600" /> },
    { name: "Scikit-Learn", icon: <Infinity className="text-coffee-600" /> },
    { name: "Pandas", icon: <TrendingUp className="text-coffee-600" /> },
    { name: "Neo4j", icon: <GitBranch className="text-coffee-600" /> },
    { name: "Matplotlib", icon: <ScatterChart className="text-coffee-600" /> },
    { name: "SQL", icon: <HardDrive className="text-coffee-600" /> },
    { name: "ggplot2", icon: <PieChart className="text-coffee-600" /> },
    { name: "MS Azure", icon: <Cloud className="text-coffee-600" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
      {/* Modern Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-lg z-50 rounded-full px-8 py-4"
      >
        <div className="flex items-center space-x-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center text-mocha-800"
          >
            <Star className="mr-2 h-5 w-5" />
            <span className="font-bold text-lg">Bhargav Ashok</span>
          </motion.div>
          <div className="hidden md:flex space-x-6">
            {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="text-mocha-700 hover:text-coffee-600 transition-colors font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-r from-mocha-800 to-coffee-700">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-cream-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              Hey, This is Bhargav Ashok
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl mb-8 text-cream-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Aspiring: Data Scientist/Engineer/Analyst | Product Manager | Software Engineer
            </motion.h2>
            <motion.p 
              className="text-lg mb-12 text-cream-200 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Taking it one step at a time to implement software solutions that provide assistance, quantifiable metrics, and real time data insights.
            </motion.p>

            {/* Fixed Tech Stack Scrolling Animation */}
            <motion.div 
              className="overflow-hidden mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <div className="flex animate-scroll space-x-8">
                {[...Array(3)].map((_, setIndex) => (
                  <div key={setIndex} className="flex space-x-8 flex-shrink-0">
                    {[
                      "https://d3k2f0s3vqqs9o.cloudfront.net/media/2BF7D1AD-4DB7-43DF-A1F1EE0C57549FC3/2DC7E8CE-9361-44E8-8124C2A98686CA14/webimage-B44D00B5-F762-4041-AAFA1D482BA4D7D3.png",
                      "https://swimburger.net/media/ppnn3pcl/azure.png",
                      "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/2560px-R_logo.svg.png",
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/701px-Python-logo-notext.svg.png",
                      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
                      "https://1000logos.net/wp-content/uploads/2022/03/Tableau-Logo.png"
                    ].map((src, index) => (
                      <motion.img
                        key={`${setIndex}-${index}`}
                        src={src}
                        alt="Tech logo"
                        className="h-16 opacity-80 hover:opacity-100 transition-opacity flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-coffee-600 text-cream-50 px-8 py-4 rounded-full font-medium hover:bg-coffee-700 transition-colors shadow-lg"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-cream-50 text-cream-50 px-8 py-4 rounded-full font-medium hover:bg-cream-50 hover:text-mocha-800 transition-colors"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section with Animation */}
      <section id="projects" ref={projectsRef} className="py-20 bg-gradient-to-br from-cream-100 to-cream-200">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-mocha-800"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8">
                  <motion.div 
                    className="flex items-center mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.icon}
                    <h3 className="text-xl font-semibold text-mocha-800 ml-3">{project.title}</h3>
                  </motion.div>
                  <p className="text-mocha-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={projectsInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: (index * 0.15) + (tagIndex * 0.05), duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-coffee-100 text-coffee-700 text-xs px-3 py-1 rounded-full border border-coffee-200"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 bg-gradient-to-br from-mocha-50 to-coffee-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-mocha-800"
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Technical Skills
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  {skill.icon}
                  <h3 className="text-xl font-semibold text-mocha-800 ml-3">{skill.title}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: (index * 0.2) + (itemIndex * 0.1), duration: 0.4 }}
                      className="flex items-start text-mocha-600"
                    >
                      <CheckCircle className="text-coffee-500 mr-3 mt-0.5 text-sm" />
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-center mb-8 text-mocha-800">Frequently Used Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + (index * 0.05), duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md flex items-center hover:shadow-lg transition-all duration-300"
                >
                  {tool.icon}
                  <span className="text-mocha-700 ml-2 font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section with Fixed Circular Image */}
      <section id="about" ref={aboutRef} className="py-20 bg-gradient-to-br from-cream-100 to-mocha-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="md:flex md:items-center md:space-x-12">
            <motion.div
              className="md:w-1/3 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src="https://media.licdn.com/dms/image/v2/D4E03AQFpl67bvKFKJQ/profile-displayphoto-scale_400_400/B4EZfOwjbRHgAo-/0/1751520524370?e=1757548800&v=beta&t=DY74ymbFKtk09ujkO3s5wp9kuSXdpT9lMSPHu8m5UPs"
                alt="Bhargav Ashok"
                className="rounded-full shadow-lg w-64 h-64 object-cover mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.div
              className="md:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-mocha-800">About Me</h2>
              <div className="space-y-4 text-mocha-600 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Hey, as you've probably already guessed... I'm Bhargav! I'm a student at Virginia Tech with a passion for data science, machine learning, and software engineering. My academic journey has been focused on solving complex problems using data-driven approaches and building intelligent systems.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  During my time at Virginia Tech, I've developed a strong foundation in statistical analysis, predictive modeling, and software development. I've applied these skills through internships and research projects at my university.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  I have strong interests in sports/sports analytics, writing, fitness, traveling (studying abroad in Scotland during the Fall 2025 semester), and art (love the MOMA in New York, as well as the art museums in Atlanta, DC, etc). I've lost over 70 lbs in one year and I try to maintain a balanced lifestyle.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.0, duration: 0.6 }}
                >
                  When I'm not coding or sitting at a desk, you can find me at the Pickleball court, Basketball court, the gym, or on the couch...watching Netflix.
                </motion.p>
              </div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="flex items-center bg-white/60 backdrop-blur-sm p-4 rounded-lg">
                  <GraduationCap className="text-coffee-600 mr-3" />
                  <div>
                    <span className="text-sm text-mocha-500">Education</span>
                    <p className="text-mocha-700 font-medium">B.S. Computational Modeling and Data Analytics</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm p-4 rounded-lg">
                  <GraduationCap className="text-coffee-600 mr-3" />
                  <div>
                    <span className="text-sm text-mocha-500">University</span>
                    <p className="text-mocha-700 font-medium">Virginia Tech</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm p-4 rounded-lg">
                  <LocationOn className="text-coffee-600 mr-3" />
                  <div>
                    <span className="text-sm text-mocha-500">Location</span>
                    <p className="text-mocha-700 font-medium">Atlanta, GA</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm p-4 rounded-lg">
                  <Languages className="text-coffee-600 mr-3" />
                  <div>
                    <span className="text-sm text-mocha-500">Languages</span>
                    <p className="text-mocha-700 font-medium">English, Tamil</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-coffee-600 to-mocha-700">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-cream-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h2>
          
          <div className="md:flex md:space-x-12">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-cream-100">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: <Mail />, text: "My Email", href: "mailto:bhargav.ashok2023@gmail.com" },
                  { icon: <MapPin />, text: "United States" },
                  { icon: <ExternalLink />, text: "LinkedIn", href: "https://www.linkedin.com/in/bhargav-ashok2005/" },
                  { icon: <Github />, text: "GitHub (More of my Projects are found here!)", href: "https://github.com/BAsh2365" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center text-cream-100"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-4">{item.icon}</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-coffee-200 transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg" action="https://formspree.io/f/meoaqlak" method="POST">
                <div className="space-y-6">
                  {[
                    { label: "Name", name: "name", type: "text", placeholder: "Your Name" },
                    { label: "Email", name: "email", type: "email", placeholder: "Your Email" },
                    { label: "Subject", name: "subject", type: "text", placeholder: "Subject" }
                  ].map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                    >
                      <label htmlFor={field.name} className="block text-cream-100 font-medium mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-300 text-cream-50 placeholder-cream-300"
                        placeholder={field.placeholder}
                      />
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <label htmlFor="message" className="block text-cream-100 font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-300 text-cream-50 placeholder-cream-300"
                      placeholder="Your Message"
                    />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-coffee-500 text-cream-50 py-3 px-6 rounded-lg font-medium hover:bg-coffee-600 transition-colors flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    Send Message <Send className="ml-2" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-mocha-900 text-cream-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="md:flex md:justify-between md:items-center">
            <motion.div
              className="mb-6 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-2">
                <Star className="mr-2" />
                <span className="font-bold text-xl">Bhargav Ashok</span>
              </div>
              <p className="text-cream-300">Student at Virginia Tech</p>
            </motion.div>
            
            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-cream-300 hover:text-cream-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            className="mt-8 pt-8 border-t border-cream-800 text-center text-cream-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p>&copy; 2025 Bhargav Ashok. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
