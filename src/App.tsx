import React, { useState, useEffect, useRef } from 'react';
import {
  Linkedin, Mail, Phone, Calendar, BookOpen, Award, ArrowUp, Menu, X, ChevronRight,
  Code, Database, BarChart, Brain, Layers, ExternalLink, FileDown, BarChart2, LineChart,
  PieChart, Smartphone, Train, Moon, Sun, Sparkles, Table2, AreaChart, Sigma,
  Braces, Cpu, FileJson, Hammer, Lightbulb, Users, PresentationChart, Microscope,
  TableProperties, FileSpreadsheet, BarChartHorizontal
} from 'lucide-react';
import GitHubIcon from './components/GitHubIcon';
import LeatherCraftProGallery from './components/LeatherCraftProGallery';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState('data-science');
  // Initialize darkMode state from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    // If no localStorage value, check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const navRef = useRef<HTMLDivElement>(null);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    // Save to localStorage
    localStorage.setItem('darkMode', String(newMode));
  };

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't set a preference in localStorage
      if (localStorage.getItem('darkMode') === null) {
        setDarkMode(e.matches);
      }
    };

    // Add listener
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // All GitHub projects data ordered by most recent date
  const allGithubProjects = [
    {
      name: "Credit Worthiness Classifier",
      description: "Machine learning model to classify customers' credit worthiness based on financial behavior",
      date: "Apr 2025",
      bullets: [
        { text: "Developed a ", highlight: "Logistic Regression model", rest: " to predict credit scores (Good, Standard, Poor)" },
        { text: "Analyzed customer ", highlight: "financial data", rest: " including income, loans, and payment behavior" },
        { text: "Achieved ", highlight: "85% accuracy", rest: " in classifying customer credit worthiness" }
      ],
      technologies: ["Python", "Scikit-Learn", "Pandas", "Jupyter Notebook"],
      repoUrl: "https://github.com/Nuthan-Reddy-Surukunti/-Credit-Worthiness-Classifier",
      icon: <BarChart className="text-primary-600" size={18} />,
      category: "data-science",
      imagePath: "/assets/projects/credit-worthiness.jpeg" // New custom image for Credit Worthiness project
    },

    {
      name: "Leather Craft Pro",
      description: "Innovative mobile application designed to revolutionize the leather crafting process by integrating design tools, project management, intelligent assistance, and expert guidance into one unified digital platform",
      date: "May 2025",
      bullets: [
        { text: "Developed a ", highlight: "comprehensive Android application", rest: " with two core modules: Main Application and Design Engine" },
        { text: "Created a ", highlight: "streamlined dashboard interface", rest: " for managing leather crafting projects from concept to completion" },
        { text: "Built a ", highlight: "sophisticated digital canvas", rest: " with precision instruments for creating and editing leather craft designs" },
        { text: "Implemented ", highlight: "AI-powered Leather Assistant", rest: " providing smart crafting guidance and design suggestions" },
        { text: "Integrated ", highlight: "real-time issue detection", rest: " to flag dimension mismatches, material inconsistencies, and technique errors" },
        { text: "Developed a ", highlight: "knowledge repository", rest: " curated from expert insights, tutorials, and traditional leathercraft methods" },
        { text: "Created ", highlight: "customizable workflow management", rest: " for organizing materials, techniques, and timelines efficiently" },
        { text: "Added ", highlight: "export capabilities", rest: " supporting various file formats for pattern cutting and collaboration" }
      ],
      technologies: ["Kotlin", "Android SDK", "Firebase", "TensorFlow Lite", "Room Database", "MVVM Architecture", "Material Design", "Coroutines", "Jetpack Compose"],
      repoUrl: "https://github.com/Nuthan-Reddy-Surukunti/LeatherCraftPro",
      icon: <Smartphone className="text-primary-600" size={18} />,
      category: "mobile-development",
      imagePath: "/assets/projects/leather-craft-pro/main.jpg" // Using custom image for Leather Craft Pro
    },
    {
      name: "Blinkit Sales Prediction ML",
      description: "Machine learning model to predict sales for Blinkit grocery delivery service",
      date: "Apr 2025",
      bullets: [
        { text: "Developed ", highlight: "Linear Regression model", rest: " to forecast sales for grocery delivery service" },
        { text: "Performed ", highlight: "feature engineering", rest: " to improve model performance" },
        { text: "Achieved ", highlight: "99% prediction accuracy", rest: " on test data" }
      ],
      technologies: ["Python", "Scikit-Learn", "Pandas", "Jupyter Notebook"],
      repoUrl: "https://github.com/Nuthan-Reddy-Surukunti/Blinkit-Sales-pridiction-ML",
      icon: <BarChart className="text-primary-600" size={18} />,
      category: "data-science",
      imagePath: "/assets/projects/blinkit-sales.jpg"
    },

    {
      name: "EDA on Online Shopping Data",
      description: "Exploratory Data Analysis on Online Shopping Data to uncover insights into customer behavior",
      date: "Nov 2024",
      bullets: [
        { text: "Conducted comprehensive ", highlight: "EDA", rest: " on a dataset of 52,955 rows" },
        { text: "Uncovered key ", highlight: "insights into customer behavior", rest: " and seasonal purchase patterns" },
        { text: "Implemented ", highlight: "RFM metrics, PCA, and time series analysis", rest: "" }
      ],
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      repoUrl: "https://github.com/Nuthan-Reddy-Surukunti/EDA-on-Online-shopping-Data",
      icon: <LineChart className="text-primary-600" size={18} />,
      category: "data-science",
      imagePath: "/assets/projects/eda-shopping.jpg"
    },
    {
      name: "Railway Reservation System",
      description: "Web-based railway ticket booking system",
      date: "Dec 2022",
      bullets: [
        "Developed a complete railway reservation system with user authentication",
        "Implemented ticket booking, cancellation, and seat availability features",
        "Created responsive UI with HTML, CSS, and JavaScript"
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      repoUrl: "https://github.com/Nuthan-Reddy-Surukunti/Railway-Reservation-System",
      icon: <Train className="text-primary-600" size={18} />,
      category: "web-development",
      imagePath: "/assets/projects/blinkit-sales.jpg" // Using a placeholder image
    },
    {
      name: "Spotify Songs Genre Segmentation",
      description: "Model-based Spotify Songs Genre Segmentation using CSV dataset",
      date: "Feb 2024",
      bullets: [
        { text: "Developed a ", highlight: "machine learning model", rest: " to classify songs by genre" },
        { text: "Analyzed ", highlight: "audio features", rest: " to identify patterns across different music genres" },
        { text: "Implemented ", highlight: "clustering algorithms", rest: " to segment songs" }
      ],
      technologies: ["Python", "Scikit-Learn", "Pandas", "Jupyter Notebook"],
      repoUrl: "https://github.com/Nuthan-Reddy-Surukunti/Spotify-Songs-Genre-Segmentation",
      icon: <PieChart className="text-primary-600" size={18} />,
      category: "data-science",
      imagePath: "/assets/projects/spotify-genre.jpg"
    },
    {
      name: "Cardiovascular Disease Prediction",
      description: "Model-based cardiovascular disease prediction using CSV dataset",
      date: "Feb 2024",
      bullets: [
        { text: "Built a ", highlight: "predictive model", rest: " for early detection of cardiovascular disease" },
        { text: "Performed ", highlight: "data preprocessing", rest: " and feature selection" },
        { text: "Evaluated ", highlight: "multiple classification algorithms", rest: " to find the best performer" }
      ],
      technologies: ["Python", "Scikit-Learn", "Pandas", "Jupyter Notebook"],
      repoUrl: "https://github.com/Nuthan-Reddy-Surukunti/Cardiovascular-Disease-Prediction",
      icon: <BarChart2 className="text-primary-600" size={18} />,
      category: "data-science",
      imagePath: "/assets/projects/cardiovascular.jpg"
    }
  ];

  // Filter projects by category
  const dataScienceProjects = allGithubProjects.filter(project => project.category === "data-science");
  const mobileProjects = allGithubProjects.filter(project => project.category === "mobile-development");

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
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Navigation Bar */}
      <nav className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg ? 'scrolled bg-white dark:bg-gray-800' : 'dark:bg-gray-900/80 dark:backdrop-blur-sm'}`} ref={navRef}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              Nuthan Reddy
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-300 nav-link dark:text-gray-300 dark:hover:text-primary-400"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition dark:bg-gray-700 dark:hover:bg-gray-600 flex items-center justify-center"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-600" />}
              </button>
              <a
                href="mailto:surkuntinuthanreddy@gmail.com"
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition shadow-md font-medium btn-hover-effect"
              >
                Contact Me
              </a>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl glass-card">
              <div className="flex flex-col space-y-4 px-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-primary-600 transition-colors duration-300 py-2 nav-link dark:text-gray-300 dark:hover:text-primary-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex items-center gap-2 py-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDarkMode();
                    }}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition dark:bg-gray-700 dark:hover:bg-gray-600 flex items-center justify-center"
                    aria-label="Toggle dark mode"
                  >
                    {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-600 dark:text-gray-400" />}
                  </button>
                  <span className="text-gray-700 dark:text-gray-300">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </div>
                <a
                  href="mailto:surkuntinuthanreddy@gmail.com"
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition shadow-md font-medium text-center mt-2 btn-hover-effect"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Me
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-secondary-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Decorative background elements with animation */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-secondary-600 to-primary-600 rounded-full opacity-20 blur-3xl animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full opacity-15 blur-2xl animate-float"></div>

        <div className="container mx-auto px-4 md:px-6 lg:max-w-5xl">
          <div className="flex flex-col items-center justify-center">
            {/* Content */}
            <div className="w-full text-center z-10">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 mb-4 animate-gradient-text">
                Surukunti Nuthan Reddy
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Aspiring Data Analyst | Machine Learning Enthusiast
              </p>

              {/* Contact information in a more compact layout */}
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto max-w-2xl">
                <div className="flex items-center gap-3 group hover:bg-primary-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-all transform hover:scale-102">
                  <Mail className="text-primary-600 dark:text-primary-400 shrink-0 group-hover:scale-110 transition-transform" size={18} />
                  <a href="mailto:surkuntinuthanreddy@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition nav-link truncate">
                    surkuntinuthanreddy@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 group hover:bg-primary-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-all transform hover:scale-102">
                  <Phone className="text-primary-600 dark:text-primary-400 shrink-0 group-hover:scale-110 transition-transform" size={18} />
                  <a href="tel:+919010256545" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition nav-link">
                    +91 90102 56545
                  </a>
                </div>
                <div className="flex items-center gap-3 group hover:bg-primary-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-all transform hover:scale-102">
                  <Linkedin className="text-primary-600 dark:text-primary-400 shrink-0 group-hover:scale-110 transition-transform" size={18} />
                  <a href="https://linkedin.com/in/nuthan-reddy/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition nav-link truncate">
                    linkedin.com/in/nuthan-reddy
                  </a>
                </div>
                <div className="flex items-center gap-3 group hover:bg-primary-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-all transform hover:scale-102">
                  <GitHubIcon className="text-primary-600 dark:text-primary-400 shrink-0 group-hover:scale-110 transition-transform" size={18} />
                  <a href="https://github.com/Nuthan-Reddy-Surukunti" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition nav-link truncate">
                    github.com/Nuthan-Reddy-Surukunti
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#projects"
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition shadow-md font-medium group flex items-center gap-2 justify-center transform hover:translate-y-[-2px]"
                >
                  <span>View My Work</span>
                  <ArrowUp className="group-hover:-translate-y-1 transition-transform rotate-45" size={18} />
                </a>
                <a
                  href="/assets/Nuthan_Reddy_CV.pdf"
                  download="Nuthan_Reddy_CV.pdf"
                  className="bg-white dark:bg-gray-800 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 px-8 py-3 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition shadow-md font-medium group flex items-center gap-2 justify-center transform hover:translate-y-[-2px]"
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
          <div className="w-6 h-10 border-2 border-primary-600 dark:border-primary-400 rounded-full flex justify-center shadow-md">
            <div className="w-1 h-3 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 animate-pulse shadow-sm"></div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 animate-gradient-text">
              About Me
            </span>
          </h2>
          <div className="max-w-4xl mx-auto transform transition-all duration-700 hover:scale-[1.01]">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-md relative overflow-hidden">
              {/* Animated decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-400/30 dark:bg-primary-800 rounded-full opacity-30 animate-pulse-slow"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-400/30 dark:bg-secondary-800 rounded-full opacity-30 animate-pulse-slow animation-delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 dark:from-primary-900 dark:to-secondary-900 rounded-full opacity-30 blur-3xl"></div>

              <div className="relative z-10">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4 transform transition-all duration-500 hover:translate-x-1">
                    Aspiring Data Analyst actively building a career in data science with hands-on experience in data visualization, exploratory data analysis (EDA), and storytelling with data. Enthusiastic about using tools like Python, SQL, and Tableau to turn raw data into actionable insights.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transform transition-all duration-500 hover:translate-x-1">
                    Currently exploring machine learning and generative AI with a strong curiosity for real-world applications. Always eager to solve problems, learn new tools, and contribute to data-driven decision-making.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8 justify-center">
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md">Data Visualization</span>
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md animation-delay-1000">Exploratory Data Analysis</span>
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md">Machine Learning</span>
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md">Generative AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400">
              Skills & Tech Stack
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="project-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-transparent dark:border-gray-700">
              <h3 className="font-semibold mb-4 text-primary-600 dark:text-primary-400 flex items-center gap-2">
                <Code size={20} />
                Programming Languages
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="text-blue-600 dark:text-blue-400">
                      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M12 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3" />
                        <path d="M12 15h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3" />
                        <path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4" />
                        <path d="M11 6v.01" />
                        <path d="M13 18v.01" />
                      </g>
                    </svg>
                  </div>
                  Python (Advanced)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="text-orange-600 dark:text-orange-400">
                      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M10 3c-.5 1.5-1.5 2.5-2 3 0 0 0 3 2 6.5 0 0-1.5 1.5-3.5 1.5s-2-1-2-1.5c0 0 1.5 0 2-1.5.5-1.5-1.5-2-1.5-5C5 3 10 3 10 3z" />
                        <path d="M14 3c-.5 1.5-1.5 2.5-2 3 0 0 0 3 2 6.5 0 0-1.5 1.5-3.5 1.5" />
                        <path d="M17.5 16.5c-.5-1.5-2-1.5-4-1.5-2 0-3.5 0-4.5.5-.8.4-1 .5-2 2 1-1 2-1 4-1 2.5 0 5 0 6.5-1 0 0 .5 1 .5 2s-.5 2-2.5 2c-2 0-5.5-1-8.5-1-3 0-4 1-4 2 0 1 1 2 1 2 1-1 2-2 8-2 1 0 6 .5 6 3.5 0 .5-1 1.5-3 1.5-2 0-3-1-3-1" />
                      </g>
                    </svg>
                  </div>
                  Java (Intermediate)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 dark:bg-green-900/30 rounded-full">
                    <Smartphone className="text-green-600 dark:text-green-400" size={18} />
                  </div>
                  Kotlin (Basic)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    <Database className="text-purple-600 dark:text-purple-400" size={18} />
                  </div>
                  SQL (Advanced)
                </li>
              </ul>
            </div>
            <div className="project-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-transparent dark:border-gray-700">
              <h3 className="font-semibold mb-4 text-primary-600 dark:text-primary-400 flex items-center gap-2">
                <BarChart size={20} />
                Data Tools
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                      <path d="M6 15h6" />
                      <path d="M6 18h6" />
                      <path d="M15 15h3" />
                      <path d="M15 18h3" />
                    </svg>
                  </div>
                  Tableau
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600 dark:text-yellow-400">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  Power BI
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 dark:bg-green-900/30 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M3 15h18" />
                      <path d="M9 3v18" />
                      <path d="M15 3v18" />
                    </svg>
                  </div>
                  Excel (Advanced)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    <Database className="text-purple-600 dark:text-purple-400" size={18} />
                  </div>
                  MySQL / PostgreSQL
                </li>
              </ul>
            </div>
            <div className="project-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-transparent dark:border-gray-700">
              <h3 className="font-semibold mb-4 text-primary-600 dark:text-primary-400 flex items-center gap-2">
                <LineChart size={20} />
                Libraries & Frameworks
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                      <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                      <path d="m8 16 4-4 4 4" />
                      <path d="M16 16v-3a2 2 0 0 0-4 0" />
                    </svg>
                  </div>
                  NumPy & Pandas
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 dark:bg-green-900/30 rounded-full">
                    <LineChart className="text-green-600 dark:text-green-400" size={18} />
                  </div>
                  Matplotlib & Seaborn
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600 dark:text-yellow-400">
                      <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                      <path d="M21.18 8.02A10 10 0 0 0 12 2v10h10a10 10 0 0 0-.82-3.98z" />
                    </svg>
                  </div>
                  Scikit-Learn
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600 dark:text-orange-400">
                      <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34" />
                      <path d="M14 3v4a2 2 0 0 0 2 2h4" />
                      <path d="M5 12h6" />
                      <path d="M8 9v6" />
                      <path d="M16 19h6" />
                      <path d="M19 16v6" />
                    </svg>
                  </div>
                  TensorFlow (Basic)
                </li>
              </ul>
            </div>
            <div className="project-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-transparent dark:border-gray-700">
              <h3 className="font-semibold mb-4 text-primary-600 dark:text-primary-400 flex items-center gap-2">
                <Award size={20} />
                Professional Skills
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <BarChart className="text-blue-600 dark:text-blue-400" size={18} />
                  </div>
                  Data Analysis & Visualization
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
                      <path d="M2 12h10" />
                      <path d="M9 4v16" />
                      <path d="m3 9 3 3-3 3" />
                      <path d="M14 8h8" />
                      <path d="M18 4v16" />
                      <path d="m21 15-3-3 3-3" />
                    </svg>
                  </div>
                  Problem Solving
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 dark:bg-green-900/30 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  Project Management
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600 dark:text-orange-400">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  Team Collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-primary-50 via-secondary-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400">
              Projects
            </span>
          </h2>

          {/* Project Category Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md shadow-sm bg-white dark:bg-gray-800 p-1">
              <button
                onClick={() => setActiveProjectTab('data-science')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${activeProjectTab === 'data-science' ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              >
                Data Science
              </button>
              <button
                onClick={() => setActiveProjectTab('mobile-development')}
                className={`px-4 py-2 text-sm font-medium rounded-md ${activeProjectTab === 'mobile-development' ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              >
                Android & Mobile
              </button>
            </div>
          </div>

          {/* Data Science Projects */}
          {activeProjectTab === 'data-science' && (
            <div className="flex flex-col gap-8 max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-6">
                Data Science Projects
              </h3>

              {/* Filter out Spotify and Cardiovascular projects to display them at the end */}
              {dataScienceProjects
                .filter(project =>
                  !project.name.includes("Spotify") &&
                  !project.name.includes("Cardiovascular"))
                .map((project, index) => (
                <div key={index} className="project-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Project Image */}
                    <div className="md:w-2/5 overflow-hidden rounded-lg flex items-center justify-center bg-gray-50 dark:bg-gray-700" style={{ aspectRatio: "4/3" }}>
                      <img
                        src={project.imagePath}
                        alt={project.name}
                        className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                        style={{ padding: "8px" }}
                      />
                    </div>

                    {/* Project Content */}
                    <div className="md:w-3/5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-primary-600 dark:text-primary-400">{project.icon}</div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{project.date}</p>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300 mb-3">
                        {project.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex}>
                            {typeof bullet === 'string' ? (
                              bullet
                            ) : (
                              <>
                                {bullet.text}
                                <span className="text-primary-600 dark:text-primary-400 font-medium">{bullet.highlight}</span>
                                {bullet.rest}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 rounded-full text-sm">{tech}</span>
                        ))}
                      </div>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 transition nav-link flex items-center gap-1 group"
                      >
                        View Project <GitHubIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Display Spotify and Cardiovascular projects at the end */}
              {dataScienceProjects
                .filter(project =>
                  project.name.includes("Spotify") ||
                  project.name.includes("Cardiovascular"))
                .map((project, index) => (
                <div key={index} className="project-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Project Image */}
                    <div className="md:w-2/5 overflow-hidden rounded-lg flex items-center justify-center bg-gray-50 dark:bg-gray-700" style={{ aspectRatio: "4/3" }}>
                      <img
                        src={project.imagePath}
                        alt={project.name}
                        className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                        style={{ padding: "8px" }}
                      />
                    </div>

                    {/* Project Content */}
                    <div className="md:w-3/5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-primary-600 dark:text-primary-400">{project.icon}</div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{project.date}</p>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300 mb-3">
                        {project.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex}>
                            {typeof bullet === 'string' ? (
                              bullet
                            ) : (
                              <>
                                {bullet.text}
                                <span className="text-primary-600 dark:text-primary-400 font-medium">{bullet.highlight}</span>
                                {bullet.rest}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 rounded-full text-sm">{tech}</span>
                        ))}
                      </div>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 transition nav-link flex items-center gap-1 group"
                      >
                        View Project <GitHubIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional Project - Tableau Dashboard */}
              <div className="project-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Project Image */}
                  <div className="md:w-2/5 overflow-hidden rounded-lg flex items-center justify-center bg-gray-50 dark:bg-gray-700" style={{ aspectRatio: "4/3" }}>
                    <img
                      src="/assets/projects/tableau-dashboard.jpg"
                      alt="Multi-Region Sales Data Dashboard"
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                      style={{ padding: "8px" }}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="md:w-3/5">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart size={18} className="text-primary-600 dark:text-primary-400" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">June 2024 – Aug 2024</p>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Multi-Region Sales Data Dashboard</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">Interactive data visualization dashboard for regional sales analysis</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300 mb-3">
                      <li>
                        Developed an <span className="text-primary-600 dark:text-primary-400 font-medium">interactive Tableau dashboard</span> visualizing economic data across multiple regions
                      </li>
                      <li>
                        Implemented <span className="text-primary-600 dark:text-primary-400 font-medium">filtering capabilities</span> to drill down into specific market segments
                      </li>
                      <li>
                        Created <span className="text-primary-600 dark:text-primary-400 font-medium">comprehensive visualizations</span> to identify market trends and optimize strategic planning
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 rounded-full text-sm">Tableau</span>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 rounded-full text-sm">Data Visualization</span>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 rounded-full text-sm">Business Analytics</span>
                    </div>
                    <a
                      href="https://public.tableau.com/app/profile/nuthan.reddy.surukunti/vizzes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 transition nav-link flex items-center gap-1 group"
                    >
                      View Project <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Projects */}
          {activeProjectTab === 'mobile-development' && (
            <div className="flex flex-col gap-8 max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-6">
                Android & Mobile Projects
              </h3>

              {mobileProjects.map((project, index) => (
                <div key={index} className="project-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Project Image */}
                    <div className="md:w-2/5 overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-700 self-start">
                      <div className="aspect-[9/16] w-full">
                        <img
                          src={project.imagePath}
                          alt={project.name}
                          className="w-full h-full transition-transform duration-500 hover:scale-105"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="md:w-3/5 flex flex-col h-full justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-primary-600 dark:text-primary-400">{project.icon}</div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{project.date}</p>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{project.name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300 mb-3">
                          {project.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex}>
                              {typeof bullet === 'string' ? (
                                bullet
                              ) : (
                                <>
                                  {bullet.text}
                                  <span className="text-primary-600 dark:text-primary-400 font-medium">{bullet.highlight}</span>
                                  {bullet.rest}
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 rounded-full text-sm">{tech}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 transition nav-link flex items-center gap-1 group"
                        >
                          View Project <GitHubIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Add gallery only for Leather Craft Pro project */}
                  {project.name === "Leather Craft Pro" && <LeatherCraftProGallery />}
                </div>
              ))}
            </div>
          )}

          {/* More Projects Button */}
          <div className="flex justify-center mt-12">
            <a
              href="https://github.com/Nuthan-Reddy-Surukunti?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 px-8 py-3 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition shadow-md font-medium group flex items-center gap-2 justify-center"
            >
              <span>View More Projects</span>
              <GitHubIcon className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-primary-50 via-secondary-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400">
              Achievements & Certifications
            </span>
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="project-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-transparent dark:border-gray-700">
              <h3 className="font-semibold mb-4 text-primary-600 dark:text-primary-400 flex items-center gap-2">
                <Award size={20} />
                Technical Achievements
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-2xl mt-0.5">★</span>
                  <span className="text-gray-800 dark:text-gray-200">5-star rating in SQL on HackerRank</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-2xl mt-0.5">★</span>
                  <span className="text-gray-800 dark:text-gray-200">Solved Top 50 Interview SQL questions on LeetCode</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-2xl mt-0.5">★</span>
                  <span className="text-gray-800 dark:text-gray-200">4-star rating in Python on HackerRank</span>
                </li>
              </ul>
            </div>

            <div className="project-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-transparent dark:border-gray-700">
              <h3 className="font-semibold mb-4 text-primary-600 dark:text-primary-400 flex items-center gap-2">
                <Award size={20} />
                Certifications
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl mt-0.5">🔷</span>
                  <div>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">Machine Learning and its Applications</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">IHUB DivyaSampark - Sep 2024</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl mt-0.5">🔷</span>
                  <div>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">Data Science with Tableau and R programming</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">CSE Pathshala - Jul 2024</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl mt-0.5">🔷</span>
                  <div>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">Artificial Intelligence Training Program</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Corizo - Feb 2024</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400">
              Education
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="project-card bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-transparent dark:border-gray-700">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                  Bachelor of Technology in Computer Science and Engineering
                </h3>
                <p className="text-gray-500 dark:text-gray-400">2022 - 2026</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Lovely Professional University</p>

              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Relevant coursework: Data Structures & Algorithms, Database Management Systems,
                Machine Learning, Data Analytics, Software Engineering
              </p>
            </div>

            <div className="project-card bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-transparent dark:border-gray-700">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400">Intermediate</h3>
                <p className="text-gray-500 dark:text-gray-400">2020 - 2022</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Sri Abhidha Institute</p>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">Score:</span>
                <span className="text-gray-600 dark:text-gray-400">92%</span>
              </div>
            </div>

            <div className="project-card bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-transparent dark:border-gray-700">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400">Matriculation</h3>
                <p className="text-gray-500 dark:text-gray-400">2019-2020</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">SR Prime School</p>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">Score:</span>
                <span className="text-gray-600 dark:text-gray-400">100%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Surukunti Nuthan Reddy</h3>
              <p>Aspiring Data Analyst | Machine Learning Enthusiast</p>
            </div>

            <div className="flex gap-6">
              <a href="https://linkedin.com/in/nuthan-reddy/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-200 transition-colors duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Nuthan-Reddy-Surukunti" target="_blank" rel="noopener noreferrer" className="hover:text-primary-200 transition-colors duration-300 transform hover:scale-110">
                <GitHubIcon size={24} />
              </a>
              <a href="mailto:surkuntinuthanreddy@gmail.com" className="hover:text-primary-200 transition-colors duration-300 transform hover:scale-110">
                <Mail size={24} />
              </a>
              <a href="tel:+919010256545" className="hover:text-primary-200 transition-colors duration-300 transform hover:scale-110">
                <Phone size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-primary-400 dark:border-primary-700 mt-6 pt-6 text-center md:text-left">
            <p>© {new Date().getFullYear()} Surukunti Nuthan Reddy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-3 rounded-full shadow-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-110 ${
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