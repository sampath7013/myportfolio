import React, { useState } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1Xw0emXjEZqkSiVaEa8cV5KDxOUQ2pv1f/view?usp=sharing', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SK
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Download Resume Button */}
            <button
              onClick={handleDownloadResume}
              className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Download size={18} />
              Resume
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={handleDownloadResume}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Download size={18} />
                Resume
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-20 -right-20"></div>
          <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -bottom-20 -left-20"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full border-4 border-blue-400 flex items-center justify-center shadow-lg overflow-hidden">
                <img 
                  src="/profile.jpg"
                  alt="Sampath Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Sampath Kumar
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Full Stack Developer | MERN Stack Specialist
              </p>
              <p className="text-gray-400 mb-8 max-w-2xl">
                I build modern, scalable web applications using MongoDB, Express, React, and Node.js. Currently pursuing Master's in Computer Science at Wichita State University with a passion for creating seamless user experiences.
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={handleDownloadResume}
              className="border-2 border-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-4">
                I'm a passionate Full Stack Developer with expertise in MERN stack development. Currently pursuing my Master's degree in Computer Science at Wichita State University while working as a Teaching Assistant at Nxtwave.
              </p>
              <p className="text-gray-300 mb-4">
                With hands-on experience in building e-commerce platforms, job search applications, and video streaming platforms, I'm committed to creating intuitive and performant web solutions.
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Location:</strong> Wichita, Kansas</p>
                <p><strong>Education:</strong> M.S. in CSE (Wichita State University)</p>
                <p><strong>Experience:</strong> Full Stack Development, Teaching & Mentoring</p>
              </div>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-lg border border-slate-600">
              <h3 className="text-xl font-bold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-blue-400 text-2xl font-bold">6+</p>
                  <p className="text-gray-400">Production Projects</p>
                </div>
                <div>
                  <p className="text-blue-400 text-2xl font-bold">3.9</p>
                  <p className="text-gray-400">Master's CGPA</p>
                </div>
                <div>
                  <p className="text-blue-400 text-2xl font-bold">TA</p>
                  <p className="text-gray-400">Teaching Assistant at Nxtwave</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="space-y-8">
            {[
              {
                title: "Nxt Trendz - E-Commerce Platform",
                description: "A feature-rich e-commerce platform inspired by Amazon and Flipkart with product filtering, authentication, and cart management.",
                tech: ["React.js", "JavaScript", "CSS", "Bootstrap", "REST API", "JWT"],
                link: "https://msknxttrendz.ccbp.tech",
                credentials: { username: "rahul", password: "rahul@2021" }
              },
              {
                title: "Jobby App - Job Search Portal",
                description: "Comprehensive job search platform with advanced filtering, job details, and persistent user sessions using JWT authentication.",
                tech: ["React.js", "JavaScript", "CSS", "Bootstrap", "REST API", "Local Storage"],
                link: "https://mskjobbyapp.ccbp.tech",
                credentials: { username: "rahul", password: "rahul@2021" }
              },
              {
                title: "Nxt Watch - Video Streaming Platform",
                description: "YouTube-like video streaming application with trending videos, gaming content, and saved videos functionality with theme toggle.",
                tech: ["React.js", "JavaScript", "CSS", "Bootstrap", "REST API", "React Router"],
                link: "https://msknxtwatch.ccbp.tech",
                credentials: { username: "rahul", password: "rahul@2021" }
              },
              {
                title: "My Journey - Portfolio Showcase",
                description: "A comprehensive portfolio application showcasing all my developed projects, skills, and professional achievements with an interactive and engaging user interface.",
                tech: ["React.js", "JavaScript", "CSS", "Bootstrap", "REST API", "Responsive Design"],
                link: "https://mskumarjourney.ccbp.tech"
              },
              {
                title: "Speed Typing - Typing Practice Application",
                description: "An interactive typing practice application designed to help users improve their typing speed and accuracy with real-time feedback and performance metrics.",
                tech: ["React.js", "JavaScript", "CSS", "Bootstrap", "Real-time Feedback"],
                link: "https://mskspeedtyping.ccbp.tech"
              },
              {
                title: "Guess Game - Number Guessing Game",
                description: "An engaging number guessing game that challenges users to predict random numbers with hints and scoring system, providing an entertaining gaming experience.",
                tech: ["React.js", "JavaScript", "CSS", "Bootstrap", "Game Logic"],
                link: "https://mskguesgame.ccbp.tech"
              }
            ].map((project, idx) => (
              <div key={idx} className="bg-slate-700/50 border border-slate-600 rounded-lg p-8 hover:border-blue-400/50 transition-colors">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.credentials && (
                  <div className="bg-slate-600/50 p-3 rounded mb-4 text-sm">
                    <p className="text-gray-300"><strong>Demo Credentials:</strong></p>
                    <p className="text-gray-400">Username: <span className="text-blue-300">{project.credentials.username}</span></p>
                    <p className="text-gray-400">Password: <span className="text-blue-300">{project.credentials.password}</span></p>
                  </div>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project <ExternalLink size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"] },
              { category: "Backend", skills: ["Node.js", "Express.js", "Python", "JWT Authentication"] },
              { category: "Databases", skills: ["MongoDB", "SQLite"] },
              { category: "Tools & Services", skills: ["Git/GitHub", "REST API", "AWS", "Power BI"] },
              { category: "Data & ML", skills: ["NumPy", "Pandas", "Scikit-learn", "Machine Learning"] },
              { category: "Other", skills: ["Version Control", "Responsive Design", "RESTful APIs", "Local Storage"] }
            ].map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                <h3 className="text-xl font-bold mb-4 text-blue-400">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <span key={i} className="bg-slate-600 px-3 py-2 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            <a
              href="mailto:sampathkumarmuthyalapati@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-blue-400 hover:bg-blue-400/10 px-6 py-3 rounded-lg transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/sampath7013"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-blue-400 hover:bg-blue-400/10 px-6 py-3 rounded-lg transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
          <p className="text-gray-400">+1 (316) 304-3795</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800/50 border-t border-slate-700 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Sampath Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
