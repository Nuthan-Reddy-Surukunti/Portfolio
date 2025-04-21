import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, Calendar, BookOpen, Award, ArrowUp, Menu, X, ChevronRight, Code, Database, BarChart, Brain, Layers, ExternalLink, FileDown } from 'lucide-react';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      setNavbarBg(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg ? 'scrolled' : ''}`} ref={navRef}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Nuthan Reddy
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300 nav-link"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="mailto:surkuntinuthanreddy@gmail.com"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition shadow-md font-medium btn-hover-effect"
              >
                Contact Me
              </a>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl glass-effect">
              <div className="flex flex-col space-y-4 px-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-purple-600 transition-colors duration-300 py-2 nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="mailto:surkuntinuthanreddy@gmail.com"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition shadow-md font-medium text-center mt-2 btn-hover-effect"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Me
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with photo on left, content on right */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left side - Photo */}
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full opacity-20 blur-xl transform scale-110"></div>
                <img
                  src="https://media-hosting.imagekit.io/2202c6569dc646ed/IMG20221206140603%20(1..._imresizer.jpg?Expires=1838223007&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0AD5OFrAXthph0NsMGKWE~lyvZ3ItkDuuWKlxaStefzWaM0~10bw0elwHz~E98rBDobGishBqt39W0bMlmD-P-m9~CrQRFKmv4jOJ8nLmEW-aVwEVZP3dCkdb2qiIWG9qLdAck1FpFNhPnAAfYWnMDtKcuO7ic9KIJP-7EuBHl9SrOEFa1SkY2Wt7WDrUsqIAItcua7NH6Xfqzn~1I4gpIOpmQT8EpedlE8~wEmEPJHVg5XxUN-wQR0oblS8fd9aFFDX2AGu~gFuGDyss-14pLBjU7hOMMq6C8zmQ-Fnnij18PIYECkqxWmIKa1QatldIPxFVQNlmmYurLiCInuOOg__"
                  alt="Nuthan Reddy"
                  className="relative w-64 h-64 rounded-full shadow-xl ring-4 ring-purple-200 object-cover animate-image-load"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right side - Info and Contact */}
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-4">
                Surukunti Nuthan Reddy
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Aspiring Data Analyst | Machine Learning Enthusiast
              </p>

              {/* Contact information */}
              <div className="mb-8 space-y-3 max-w-md">
                <div className="flex items-center gap-3 group hover:bg-purple-50 p-2 rounded-lg transition-all">
                  <Mail className="text-purple-600 shrink-0 group-hover:scale-110 transition-transform" size={18} />
                  <a href="mailto:surkuntinuthanreddy@gmail.com" className="text-gray-600 hover:text-purple-600 transition nav-link">
                    surkuntinuthanreddy@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 group hover:bg-purple-50 p-2 rounded-lg transition-all">
                  <Phone className="text-purple-600 shrink-0 group-hover:scale-110 transition-transform" size={18} />
                  <a href="tel:+919010256545" className="text-gray-600 hover:text-purple-600 transition nav-link">
                    +91 90102 56545
                  </a>
                </div>
                <div className="flex items-center gap-3 group hover:bg-purple-50 p-2 rounded-lg transition-all">
                  <Linkedin className="text-purple-600 shrink-0 group-hover:scale-110 transition-transform" size={18} />
                  <a href="https://linkedin.com/in/nuthan-reddy/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition nav-link">
                    linkedin.com/in/nuthan-reddy
                  </a>
                </div>
                <div className="flex items-center gap-3 group hover:bg-purple-50 p-2 rounded-lg transition-all">
                  <Github className="text-purple-600 shrink-0 group-hover:scale-110 transition-transform" size={18} />
                  <a href="https://github.com/Nuthan-Reddy-Surukunti" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition nav-link">
                    github.com/Nuthan-Reddy-Surukunti
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition shadow-md font-medium group flex items-center gap-2 justify-center"
                >
                  <span>View My Work</span>
                  <ArrowUp className="group-hover:-translate-y-1 transition-transform rotate-45" size={18} />
                </a>
                <a
                  href="/assets/Nuthan_Reddy_CV.pdf"
                  download="Nuthan_Reddy_CV.pdf"
                  className="bg-white border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition shadow-md font-medium group flex items-center gap-2 justify-center"
                >
                  <span>Download CV</span>
                  <FileDown className="group-hover:-translate-y-1 transition-transform" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Project Cards */}
            <div className="project-card bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={18} className="text-purple-600" />
                <p className="text-sm text-gray-500">June 2024 – Aug 2024</p>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Multi-Region Sales Data Dashboard</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>Developed an interactive Tableau dashboard visualizing economic data across multiple regions</li>
                <li>Implemented filtering capabilities to drill down into specific market segments</li>
                <li>Created comprehensive visualizations to identify market trends and optimize strategic planning</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Tableau</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Data Visualization</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Business Analytics</span>
              </div>
              <a href="https://public.tableau.com/app/profile/nuthan.reddy.surukunti/vizzes" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium hover:text-purple-800 transition nav-link">View Project →</a>
            </div>

            <div className="project-card bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={18} className="text-purple-600" />
                <p className="text-sm text-gray-500">Sep 2024 – Nov 2024</p>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">EDA on Online Shopping Data</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>Conducted comprehensive Exploratory Data Analysis on a dataset of 52,955 rows</li>
                <li>Uncovered key insights into customer behavior and seasonal purchase patterns</li>
                <li>Generated visualizations that led to a 15% improvement in marketing strategy</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Pandas</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Matplotlib</span>
              </div>
              <a href="https://github.com/Nuthan-Reddy-Surukunti" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium hover:text-purple-800 transition nav-link">View Project →</a>
            </div>

            <div className="project-card bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={18} className="text-purple-600" />
                <p className="text-sm text-gray-500">Mar 2024 – Apr 2024</p>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Color Detection System</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>Developed real-time color identification system</li>
                <li>Improved precision by 90% with classification algorithm</li>
                <li>Reduced processing time by 30%</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">OpenCV</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">NumPy</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Tkinter</span>
              </div>
              <a href="https://github.com/Nuthan-Reddy-Surukunti" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-medium hover:text-purple-800 transition nav-link">View Project →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Skills & Tech Stack
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="project-card bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-md">
              <h3 className="font-semibold mb-4 text-purple-600 flex items-center gap-2">
                <BookOpen size={20} />
                Programming Languages
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Python (Advanced)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Java (Intermediate)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Kotlin (Basic)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  SQL (Advanced)
                </li>
              </ul>
            </div>
            <div className="project-card bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-md">
              <h3 className="font-semibold mb-4 text-purple-600 flex items-center gap-2">
                <BookOpen size={20} />
                Data Tools
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Tableau
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Power BI
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Excel (Advanced)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  MySQL / PostgreSQL
                </li>
              </ul>
            </div>
            <div className="project-card bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-md">
              <h3 className="font-semibold mb-4 text-purple-600 flex items-center gap-2">
                <BookOpen size={20} />
                Libraries & Frameworks
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  NumPy & Pandas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Matplotlib & Seaborn
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Scikit-Learn
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  TensorFlow (Basic)
                </li>
              </ul>
            </div>
            <div className="project-card bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-md">
              <h3 className="font-semibold mb-4 text-purple-600 flex items-center gap-2">
                <BookOpen size={20} />
                Professional Skills
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Data Analysis & Visualization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Problem Solving
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Project Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Team Collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Achievements & Certifications
            </span>
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="project-card bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold mb-4 text-purple-600 flex items-center gap-2">
                <Award size={20} />
                Technical Achievements
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-2xl mt-0.5">★</span>
                  <span className="text-gray-800">5-star rating in SQL on HackerRank</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-2xl mt-0.5">★</span>
                  <span className="text-gray-800">Solved Top 50 Interview SQL questions on LeetCode</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-2xl mt-0.5">★</span>
                  <span className="text-gray-800">4-star rating in Python on HackerRank</span>
                </li>
              </ul>
            </div>

            <div className="project-card bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold mb-4 text-purple-600 flex items-center gap-2">
                <Award size={20} />
                Certifications
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl mt-0.5">🔷</span>
                  <div>
                    <p className="text-gray-800 font-medium">Machine Learning and its Applications</p>
                    <p className="text-gray-500 text-sm">IHUB DivyaSampark - Sep 2024</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl mt-0.5">🔷</span>
                  <div>
                    <p className="text-gray-800 font-medium">Data Science with Tableau and R programming</p>
                    <p className="text-gray-500 text-sm">CSE Pathshala - Jul 2024</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl mt-0.5">🔷</span>
                  <div>
                    <p className="text-gray-800 font-medium">Artificial Intelligence Training Program</p>
                    <p className="text-gray-500 text-sm">Corizo - Feb 2024</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Education
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="project-card bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-purple-600">
                  Bachelor of Technology in Computer Science and Engineering
                </h3>
                <p className="text-gray-500">2022 - 2026</p>
              </div>
              <p className="text-gray-600 mb-4">Lovely Professional University</p>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">GPA:</span>
                <span className="text-gray-600">6.84</span>
              </div>
              <p className="text-gray-600 mt-4">
                Relevant coursework: Data Structures & Algorithms, Database Management Systems,
                Machine Learning, Data Analytics, Software Engineering
              </p>
            </div>

            <div className="project-card bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-purple-600">Intermediate</h3>
                <p className="text-gray-500">2020 - 2022</p>
              </div>
              <p className="text-gray-600 mb-4">Sri Abhidha Institute</p>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Score:</span>
                <span className="text-gray-600">92%</span>
              </div>
            </div>

            <div className="project-card bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-purple-600">Matriculation</h3>
                <p className="text-gray-500">2019-2020</p>
              </div>
              <p className="text-gray-600 mb-4">SR Prime School</p>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Score:</span>
                <span className="text-gray-600">100%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Surukunti Nuthan Reddy</h3>
              <p>Aspiring Data Analyst | Machine Learning Enthusiast</p>
            </div>

            <div className="flex gap-6">
              <a href="https://linkedin.com/in/nuthan-reddy/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 transition">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Nuthan-Reddy-Surukunti" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 transition">
                <Github size={24} />
              </a>
              <a href="mailto:surkuntinuthanreddy@gmail.com" className="hover:text-purple-200 transition">
                <Mail size={24} />
              </a>
              <a href="tel:+919010256545" className="hover:text-purple-200 transition">
                <Phone size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-purple-400 mt-6 pt-6 text-center md:text-left">
            <p>© 2025 Surukunti Nuthan Reddy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-3 rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 ${
          showBackToTop ? 'visible' : ''
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;