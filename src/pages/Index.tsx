
import React from 'react';
import WindowFrame from '../components/WindowFrame';
import TabNavigation from '../components/TabNavigation';
import TerminalSection from '../components/TerminalSection';
import ProjectCard from '../components/ProjectCard';
import { User, Mail, Home, Monitor, Github, Linkedin, Twitter, Code } from 'lucide-react';

const Index = () => {
  const tabs = [
    {
      id: 'home',
      label: 'Home',
      icon: <Home size={14} />,
      content: (
        <TerminalSection title="Welcome">
          <div className="space-y-8">
            <div className="text-center">
              <div className="relative inline-block">
                <h1 className="font-terminus text-5xl font-bold bg-gradient-to-r from-retro-darkblue to-blue-600 bg-clip-text text-transparent mb-3">
                  John Developer
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 animate-pulse"></div>
              </div>
              <p className="text-xl text-gray-600 font-terminus font-medium">
                Full Stack Developer & UI/UX Designer
              </p>
            </div>
            
            <div className="terminal-text max-w-3xl mx-auto rounded-xl shadow-2xl">
              <div className="text-green-400">
                {'>'}  system.info --user="john_developer"<br/>
                Loading profile...<br/>
                <span className="text-cyan-300">
                  Status: Online and ready to build amazing things<br/>
                  Location: San Francisco, CA<br/>
                  Experience: 5+ years in web development<br/>
                  Specialties: React, Node.js, Python, UI/UX Design
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="E-Commerce Platform"
                description="Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard."
                tech={['React', 'Node.js', 'PostgreSQL', 'Stripe']}
                liveUrl="#"
                githubUrl="#"
              />
              <ProjectCard
                title="Task Management App"
                description="Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features."
                tech={['Vue.js', 'Express', 'Socket.io', 'MongoDB']}
                liveUrl="#"
                githubUrl="#"
              />
            </div>
          </div>
        </TerminalSection>
      ),
    },
    {
      id: 'about',
      label: 'About',
      icon: <User size={14} />,
      content: (
        <TerminalSection title="About Me">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="font-terminus text-3xl font-bold bg-gradient-to-r from-retro-darkblue to-purple-600 bg-clip-text text-transparent">
                  Background
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    I'm a passionate full-stack developer with over 5 years of experience 
                    creating digital solutions. I love combining the nostalgia of 90s computing 
                    with modern development practices.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open source projects, or playing retro video games.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="font-terminus text-3xl font-bold bg-gradient-to-r from-retro-darkblue to-purple-600 bg-clip-text text-transparent">
                  Skills
                </h2>
                <div className="space-y-4">
                  {[
                    { category: 'Frontend', skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
                    { category: 'Backend', skills: ['Node.js', 'Python', 'Express', 'FastAPI'] },
                    { category: 'Database', skills: ['PostgreSQL', 'MongoDB', 'Redis'] },
                    { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Figma'] },
                  ].map((group) => (
                    <div key={group.category} className="retro-window p-4 hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                      <h3 className="font-terminus font-semibold text-lg text-retro-darkblue mb-3">
                        {group.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-sm font-terminus rounded-full hover:shadow-md transition-all duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TerminalSection>
      ),
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <Monitor size={14} />,
      content: (
        <TerminalSection title="My Projects">
          <div className="space-y-8">
            <div className="grid gap-8">
              <ProjectCard
                title="Retro Portfolio Website"
                description="A 90s-inspired portfolio website built with React and Tailwind CSS. Features include terminal-style animations, window frames, and nostalgic design elements."
                tech={['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']}
                liveUrl="#"
                githubUrl="#"
              />
              <ProjectCard
                title="Real-time Chat Application"
                description="WebSocket-based chat application with rooms, private messaging, and emoji reactions. Built with modern web technologies and deployed on AWS."
                tech={['React', 'Socket.io', 'Express', 'Redis', 'AWS']}
                liveUrl="#"
                githubUrl="#"
              />
              <ProjectCard
                title="Data Visualization Dashboard"
                description="Interactive dashboard for data analysis with multiple chart types, filtering capabilities, and export functionality. Processes large datasets efficiently."
                tech={['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL']}
                liveUrl="#"
                githubUrl="#"
              />
              <ProjectCard
                title="Mobile-First PWA"
                description="Progressive Web App with offline capabilities, push notifications, and responsive design. Provides native app-like experience across all devices."
                tech={['React', 'Service Workers', 'IndexedDB', 'WebPush']}
                liveUrl="#"
                githubUrl="#"
              />
            </div>
          </div>
        </TerminalSection>
      ),
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <Mail size={14} />,
      content: (
        <TerminalSection title="Get In Touch">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="font-terminus text-3xl font-bold bg-gradient-to-r from-retro-darkblue to-purple-600 bg-clip-text text-transparent">
                  Let's Connect
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  I'm always interested in new opportunities, collaborations, 
                  and interesting projects. Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="retro-window p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <Mail className="text-green-600" size={24} />
                      </div>
                      <div>
                        <div className="font-terminus font-semibold text-lg">Email</div>
                        <div className="text-gray-600">john@developer.com</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="retro-window p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-100 rounded-full">
                        <Github className="text-purple-600" size={24} />
                      </div>
                      <div>
                        <div className="font-terminus font-semibold text-lg">GitHub</div>
                        <div className="text-gray-600">github.com/johndeveloper</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="retro-window p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Linkedin className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <div className="font-terminus font-semibold text-lg">LinkedIn</div>
                        <div className="text-gray-600">linkedin.com/in/johndeveloper</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="font-terminus text-3xl font-bold bg-gradient-to-r from-retro-darkblue to-purple-600 bg-clip-text text-transparent">
                  Send Message
                </h2>
                <form className="space-y-6 retro-window p-6">
                  <div>
                    <label className="block font-terminus text-sm font-semibold mb-2 text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border-2 border-retro-border bg-white font-terminus text-sm rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-terminus text-sm font-semibold mb-2 text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 border-2 border-retro-border bg-white font-terminus text-sm rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block font-terminus text-sm font-semibold mb-2 text-gray-700">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full p-3 border-2 border-retro-border bg-white font-terminus text-sm resize-none rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                      placeholder="Your message here..."
                    />
                  </div>
                  <button type="submit" className="retro-button w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white border-none rounded-lg hover:shadow-lg transition-all duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </TerminalSection>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <WindowFrame title="Portfolio.exe - John Developer" className="shadow-2xl">
          <TabNavigation tabs={tabs} />
        </WindowFrame>
        
        {/* Status Bar */}
        <div className="mt-6 bg-gradient-to-r from-retro-gray to-gray-200 border-2 border-retro-border p-3 flex items-center justify-between text-sm font-terminus rounded-lg shadow-lg">
          <div className="flex items-center gap-6">
            <span className="font-semibold">Ready</span>
            <span className="text-gray-400">|</span>
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
              <span className="font-medium">Online</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{new Date().toLocaleDateString()}</span>
            <span>{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
