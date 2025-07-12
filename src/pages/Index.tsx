import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Star,
  Mail,
  MapPin,
  ExternalLink,
  Github,
  Settings,
  Home,
  Zap,
  DollarSign,
  Tv,
  Database,
  BarChart3,
  Brain,
  Code2,
  CheckCircle,
  Ship,
  Infinity,
  TrendingUp,
  GitBranch,
  ScatterChart,
  HardDrive,
  PieChart,
  Cloud,
  GraduationCap,
  MapPin as LocationOn,
  Languages,
  Send,
  FileText,
  Download,
  Calendar,
  Building,
  Award
} from 'lucide-react';

const Index = () => {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const resumeRef = useRef(null);
  const [isScrollPaused, setIsScrollPaused] = useState(false);

  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const aboutInView   = useInView(aboutRef,   { once: true, margin: "-100px" });
  const skillsInView  = useInView(skillsRef,  { once: true, margin: "-100px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });
  const resumeInView = useInView(resumeRef, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Systems-Engineering AI chatbot",
      description:
        "Leveraged AI systems, API keys, software engineering principles, and systems engineering concepts to make an end-to-end MBSE chatbot application based on Systems Engineering Research, through the Virginia Tech Hume Center, and development goals.",
      icon: <Settings className="text-coffee-600" />,
      tags: ["Python", "Relational Databases", "Graph Databases", "Docker", "Azure", "Software diagramming", "AI"]
    },
    {
      title: "Real Estate Data Program",
      description:
        "Developed a Python script in Jupyter Notebook that leveraged Python Pandas, asyncio, Playwright, and Excel Output for webscrapping in order to catagorize and analyze Real Estate Housing Data in the Atlanta Area.",
      icon: <Home className="text-coffee-600" />,
      tags: ["Pandas Dataframes", "Web Scrapping", "Excel", "Data Analysis"]
    },
    {
      title: "NBA Case Study: Data Prediction and Analysis",
      description:
        "Built a simple linear regression model with 7-8 features (NBA stats and Advanced stat metrics) based on Webscrapped data from Basketball Reference on game splits for the 2025 season. Gathered Metrics of predicted data, outputted to a CSV, and built a dashboard in Tableau showing different statistical comparisons.",
      icon: <Zap className="text-coffee-600" />,
      tags: ["Sci-Kit-Learn", "Python", "Linear-Regression", "Data Visualization in Tableau", "Webscrapping", "Data Storytelling"]
    },
    {
      title: "Financial Analysis: Sony Corporation",
      description:
        "Looked at financial data (Revenue, Profits, and Earnings Per share) for the Sony Corporation (SONY) from 2020-2024 and analyzing the company's finances while making suggestions for potential improvement and future company projections.",
      icon: <DollarSign className="text-coffee-600" />,
      tags: ["Python", "APIs", "Matplotlib", "Fundamental understanding of lists and list comprehensions"]
    },
    {
      title: "Condensed Media: Online Branding and Social Media Page",
      description:
        "Started a Website in 2021 titled condensed sports, eventually making it a multi-disciplinary personal brand for sports and pop culture. Features a podcast, Instagram page, and website discussing all things sports/pop culture.",
      icon: <Tv className="text-coffee-600" />,
      tags: ["Social Media Marketing", "Website optimization", "Podcasting", "Sports Analytics and Research"]
    },
    {
      title: "Multiple Linear Regression in R",
      description:
        "MLR in R using cross-validation, ridge regression, etc. Shows how the number of touchdowns for an Atlanta Falcons player is affected by multiple factors.",
      icon: <Database className="text-coffee-600" />,
      tags: ["R", "Regression (Ridge, Lasso, MLR, etc)", "Data Analysis"]
    }
  ];

  const skills = [
    {
      title: "Data Science",
      icon: <BarChart3 className="text-coffee-600 text-2xl" />,
      items: [
        "Statistical Analysis/Regression (Python & R)",
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
        "Contrastive Learning",
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

  const experiences = [
    {
      company: "Violet Labs",
      position: "Systems Engineering Intern",
      date: "May – August 2025",
      location: "Remote (Atlanta, GA)",
      highlights: [
        "Crafted an ETL pipeline in Node.js to migrate and transform PostgreSQL data into Neo4j",
        "Improved Neo4j query times by 53% on average using optimization techniques",
        "Conducted end-to-end tests for larger instances (14 second improved query for 1000-part BOM)"
      ]
    },
    {
      company: "Hume Center for National Security and Technology at Virginia Tech",
      position: "AI/Software Engineering Research Intern",
      date: "September 2024 – May 2025",
      location: "Blacksburg, VA",
      highlights: [
        "Developed Model-Based Systems Engineering AI tool, boosting project efficiency by 25%",
        "Leveraged RAG, Python, AI APIs, MS SQL, Flask, and HTML UI components",
        "Implemented cloud-based, containerized solutions using Microsoft Azure and Docker"
      ]
    },
    {
      company: "Gwinnett County Public Library Headquarters",
      position: "Information Technology Intern",
      date: "May – July 2024",
      location: "Lawrenceville, GA",
      highlights: [
        "Automated browser data clearing with scripts, cutting reboot times by 50%",
        "Built visualizations with Excel, Python, and JavaScript for Microsoft Office 365 alternative",
        "Monitored and mitigated risks on library PCs via Trend Micro"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 bg-gradient-to-r from-mocha-800 to-coffee-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream-50 max-w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              style={{
                overflow: 'visible',
                borderRight: 'none',
                whiteSpace: 'normal',
                animation: undefined
              }}
            >
              <span className="hidden sm:inline">Hey, This is Bhargav Ashok</span>
              <span className="sm:hidden block">Bhargav Ashok</span>
            </motion.h1>
            <motion.h2
              className="text-sm sm:text-base md:text-xl lg:text-2xl mb-8 text-cream-100 max-w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              style={{
                overflow: 'visible',
                borderRight: 'none',
                whiteSpace: 'normal',
                animation: undefined
              }}
            >
              <span className="hidden sm:inline">Aspiring: Data Scientist/Engineer/Analyst | Product Manager | Software Engineer</span>
              <span className="sm:hidden block">Data Scientist | Software Engineer</span>
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg mb-12 text-cream-200 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              Taking it one step at a time to implement software solutions that provide assistance, quantifiable metrics, and real time data insights.
            </motion.p>

            {/* Interactive Tech Stack Scrolling Animation */}
            <motion.div
              className="overflow-x-hidden mb-12 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
              onMouseEnter={() => setIsScrollPaused(true)}
              onMouseLeave={() => setIsScrollPaused(false)}
            >
              <div
                className={`flex space-x-8 ${isScrollPaused ? '' : 'animate-scroll'} w-full`}
                style={{
                  minWidth: '100%',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                }}
              >
                {Array(5).fill([
                  "https://d3k2f0s3vqqs9o.cloudfront.net/media/2BF7D1AD-4DB7-43DF-A1F1EE0C57549FC3/2DC7E8CE-9361-44E8-8124C2A98686CA14/webimage-B44D00B5-F762-4041-AAFA1D482BA4D7D3.png",
                  "https://swimburger.net/media/ppnn3pcl/azure.png",
                  "/lovable-uploads/1b43edff-6cd6-48a9-a6be-2ba6b86e61da.png",
                  "/lovable-uploads/4cb6f052-34f4-4160-9663-21d2fd618799.png",
                  "/lovable-uploads/5380ca9a-2253-42fe-a05b-9a11bb5c20e2.png",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/2560px-R_logo.svg.png",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/701px-Python-logo-notext.svg.png",
                  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
                  "https://1000logos.net/wp-content/uploads/2022/03/Tableau-Logo.png"
                ]).flat().map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt="Tech logo"
                    className="h-16 opacity-80 hover:opacity-100 transition-opacity flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
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

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-gradient-to-br from-cream-100 to-mocha-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-mocha-800"
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12 space-y-8 md:space-y-0">
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-coffee-200">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQFpl67bvKFKJQ/profile-displayphoto-scale_400_400/B4EZfOwjbRHgAo-/0/1751520524370?e=1757548800&v=beta&t=DY74ymbFKtk09ujkO3s5wp9kuSXdpT9lMSPHu8m5UPs"
                  alt="Bhargav Ashok"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4 text-mocha-600 leading-relaxed text-center md:text-left">
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
                <div className="flex items-center bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-coffee-200">
                  <GraduationCap className="text-coffee-600 mr-3" />
                  <div>
                    <span className="text-sm text-mocha-500">Education</span>
                    <p className="text-mocha-700 font-medium">B.S. Computational Modeling and Data Analytics</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-coffee-200">
                  <GraduationCap className="text-coffee-600 mr-3" />
                  <div>
                    <span className="text-sm text-mocha-500">University</span>
                    <p className="text-mocha-700 font-medium">Virginia Tech</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-coffee-200">
                  <LocationOn className="text-coffee-600 mr-3" />
                  <div>
                    <span className="text-sm text-mocha-500">Location</span>
                    <p className="text-mocha-700 font-medium">Atlanta, GA</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-coffee-200">
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

      {/* Resume Section */}
      <section id="resume" ref={resumeRef} className="py-20 bg-gradient-to-br from-mocha-100 to-coffee-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-mocha-800"
            initial={{ opacity: 0, y: 30 }}
            animate={resumeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Professional Experience
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={resumeInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-mocha-800 mb-2">{exp.position}</h3>
                    <div className="flex items-center text-coffee-600 mb-2">
                      <Building className="mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <div className="flex items-center text-mocha-600 mb-1">
                      <Calendar className="mr-2" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center text-mocha-600">
                      <MapPin className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={resumeInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + hIndex * 0.1, duration: 0.4 }}
                      className="flex items-start text-mocha-600"
                    >
                      <CheckCircle className="text-coffee-500 mr-3 mt-0.5 text-sm flex-shrink-0" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 bg-gradient-to-br from-cream-100 to-cream-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold mb-16 text-mocha-800"
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
                <div className="p-8 text-center">
                  <motion.div className="flex items-center justify-center mb-4" whileHover={{ scale: 1.05 }}>
                    {project.icon}
                    <h3 className="text-xl font-semibold text-mocha-800 ml-3">{project.title}</h3>
                  </motion.div>
                  <p className="text-mocha-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={projectsInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.15 + tagIndex * 0.05, duration: 0.3 }}
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
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold mb-16 text-mocha-800"
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
                initial={{ opacity: 0, y: 50 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-6">
                  {skill.icon}
                  <h3 className="text-xl font-semibold text-mocha-800 ml-3">{skill.title}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + itemIndex * 0.1, duration: 0.4 }}
                      className="flex items-start text-mocha-600 justify-center"
                    >
                      <CheckCircle className="text-coffee-500 mr-3 mt-0.5 text-sm flex-shrink-0" />
                      <span className="text-sm text-center">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-mocha-800">Frequently Used Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
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

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-r from-coffee-600 to-mocha-700">
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
