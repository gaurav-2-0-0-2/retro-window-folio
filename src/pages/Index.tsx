
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
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="font-terminus text-4xl font-bold text-retro-darkblue mb-2">
                John Developer
              </h1>
              <p className="text-xl text-retro-darkgray font-terminus">
                Full Stack Developer & UI/UX Designer
              </p>
            </div>
            
            <div className="terminal-text max-w-2xl mx-auto">
              <div className="text-green-400">
                {'>'} system.info --user="john_developer"<br/>
                Loading profile...<br/>
                <span className="text-cyan-300">
                  Status: Online and ready to build amazing things<br/>
                  Location: San Francisco, CA<br/>
                  Experience: 5+ years in web development<br/>
                  Specialties: React, Node.js, Python, UI/UX Design
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
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
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-terminus text-2xl font-bold text-retro-darkblue mb-4">
                  Background
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I'm a passionate full-stack developer with over 5 years of experience 
                  creating digital solutions. I love combining the nostalgia of 90s computing 
                  with modern development practices.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open source projects, or playing retro video games.
                </p>
              </div>
              
              <div>
                <h2 className="font-terminus text-2xl font-bold text-retro-darkblue mb-4">
                  Skills
                </h2>
                <div className="space-y-3">
                  {[
                    { category: 'Frontend', skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
                    { category: 'Backend', skills: ['Node.js', 'Python', 'Express', 'FastAPI'] },
                    { category: 'Database', skills: ['PostgreSQL', 'MongoDB', 'Redis'] },
                    { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Figma'] },
                  ].map((group) => (
                    <div key={group.category} className="retro-window p-3">
                      <h3 className="font-terminus font-semibold text-sm text-retro-darkblue mb-2">
                        {group.category}
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-retro-gray border border-retro-darkgray text-xs font-terminus"
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
          <div className="space-y-6">
            <div className="grid gap-6">
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
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-terminus text-2xl font-bold text-retro-darkblue mb-4">
                  Let's Connect
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  I'm always interested in new opportunities, collaborations, 
                  and interesting projects. Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="retro-window p-4">
                    <div className="flex items-center gap-3">
                      <Mail className="text-retro-darkblue" size={20} />
                      <div>
                        <div className="font-terminus font-semibold">Email</div>
                        <div className="text-sm text-gray-600">john@developer.com</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="retro-window p-4">
                    <div className="flex items-center gap-3">
                      <Github className="text-retro-darkblue" size={20} />
                      <div>
                        <div className="font-terminus font-semibold">GitHub</div>
                        <div className="text-sm text-gray-600">github.com/johndeveloper</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="retro-window p-4">
                    <div className="flex items-center gap-3">
                      <Linkedin className="text-retro-darkblue" size={20} />
                      <div>
                        <div className="font-terminus font-semibold">LinkedIn</div>
                        <div className="text-sm text-gray-600">linkedin.com/in/johndeveloper</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="font-terminus text-2xl font-bold text-retro-darkblue mb-4">
                  Send Message
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block font-terminus text-sm font-semibold mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border-2 border-retro-border bg-white font-terminus text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-terminus text-sm font-semibold mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 border-2 border-retro-border bg-white font-terminus text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block font-terminus text-sm font-semibold mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full p-2 border-2 border-retro-border bg-white font-terminus text-sm resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                  <button type="submit" className="retro-button">
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
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <WindowFrame title="Portfolio.exe - John Developer" className="shadow-window">
          <TabNavigation tabs={tabs} />
        </WindowFrame>
        
        {/* Status Bar */}
        <div className="mt-4 bg-retro-gray border-2 border-retro-border p-2 flex items-center justify-between text-xs font-terminus">
          <div className="flex items-center gap-4">
            <span>Ready</span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Online
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>{new Date().toLocaleDateString()}</span>
            <span>{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
