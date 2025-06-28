
import React from 'react';
import WindowFrame from '../components/WindowFrame';
import TabNavigation from '../components/TabNavigation';
import TerminalSection from '../components/TerminalSection';
import ProjectCard from '../components/ProjectCard';
import { User, Mail, Home, Monitor, Github, Linkedin, Twitter, Code, Zap, Cpu, HardDrive, Wifi } from 'lucide-react';

const Index = () => {
  const tabs = [
    {
      id: 'home',
      label: 'System',
      icon: <Cpu size={16} />,
      content: (
        <TerminalSection title="Neural Interface">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="font-orbitron text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4 neon-glow tracking-wider">
                CYBER_DEV.EXE
              </h1>
              <p className="text-2xl text-cyan-300 font-orbitron font-bold uppercase tracking-widest">
                Neural Network Developer
              </p>
              <div className="mt-4 flex justify-center items-center gap-4">
                <div className="w-2 h-2 bg-green-400 rounded-full pulse-neon"></div>
                <span className="font-fira-code text-green-400 text-sm">SYSTEM ONLINE</span>
                <div className="w-2 h-2 bg-green-400 rounded-full pulse-neon"></div>
              </div>
            </div>
            
            <div className="terminal-screen">
              <div className="terminal-text">
                <div className="text-green-400 mb-4">
                  {'>'}neural_interface.init()<br/>
                  Loading consciousness matrix...<br/>
                  <span className="text-cyan-300">
                    ╔════════════════════════════════════╗<br/>
                    ║ STATUS: ONLINE AND OPERATIONAL     ║<br/>
                    ║ LOCATION: DIGITAL_REALM://MATRIX   ║<br/>
                    ║ EXPERIENCE: 5+ YEARS ACTIVE        ║<br/>
                    ║ PROTOCOLS: REACT | NODE | PYTHON   ║<br/>
                    ╚════════════════════════════════════╝
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="QUANTUM_COMMERCE.EXE"
                description="Advanced neural commerce platform with quantum encryption, biometric auth, and holographic payment processing. Features real-time data streams and AI-driven analytics."
                tech={['React', 'Node.js', 'PostgreSQL', 'Quantum-API']}
                liveUrl="#"
                githubUrl="#"
              />
              <ProjectCard
                title="NEXUS_TASKNET.EXE"
                description="Cybernetic task management system with real-time neural sync, drag-and-drop matrix interface, and multi-user consciousness linking capabilities."
                tech={['Vue.js', 'Express', 'Socket.io', 'NeuroDB']}
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
      label: 'Profile',
      icon: <User size={16} />,
      content: (
        <TerminalSection title="User Profile">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="scan-line">
                <h2 className="font-orbitron text-3xl font-black text-cyan-400 mb-6 uppercase tracking-wider neon-glow">
                  <Zap className="inline mr-2" size={24} />
                  Background_Data
                </h2>
                <div className="space-y-4 text-gray-300 font-fira-code leading-relaxed">
                  <p>
                    I'm a cybernetic developer interfacing between the digital realm and 
                    reality for over 5 cycles. I specialize in creating neural pathways 
                    through code, merging retro-futuristic aesthetics with cutting-edge protocols.
                  </p>
                  <p>
                    When not jacked into the mainframe, I explore new data dimensions, 
                    contribute to open-source neural networks, and decode vintage cyberpunk archives.
                  </p>
                </div>
              </div>
              
              <div className="scan-line">
                <h2 className="font-orbitron text-3xl font-black text-magenta-400 mb-6 uppercase tracking-wider neon-glow">
                  <HardDrive className="inline mr-2" size={24} />
                  Core_Modules
                </h2>
                <div className="space-y-4">
                  {[
                    { category: 'Frontend_Neural', skills: ['React.Neural', 'Vue.Quantum', 'TypeScript.AI', 'Tailwind.Matrix'] },
                    { category: 'Backend_Core', skills: ['Node.Nexus', 'Python.Cyber', 'Express.Net', 'FastAPI.Turbo'] },
                    { category: 'DataBanks', skills: ['PostgreSQL.Prime', 'MongoDB.Mesh', 'Redis.Cache', 'GraphQL.Link'] },
                    { category: 'CyberTools', skills: ['Git.Version', 'Docker.Container', 'AWS.Cloud', 'Figma.Design'] },
                  ].map((group) => (
                    <div key={group.category} className="project-card">
                      <h3 className="font-orbitron font-bold text-lg text-blue-400 mb-3 uppercase tracking-wide">
                        {group.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span key={skill} className="skill-chip">
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
      label: 'Archives',
      icon: <Monitor size={16} />,
      content: (
        <TerminalSection title="Project Archives">
          <div className="space-y-8">
            <div className="grid gap-8">
              <ProjectCard
                title="RETRO_PORTFOLIO.NEURAL"
                description="90s anime-inspired digital consciousness interface built with React neural pathways and Tailwind matrix styling. Features terminal animations, neon aesthetics, and nostalgic UI elements."
                tech={['React.Neural', 'TypeScript.AI', 'Tailwind.Matrix', 'Framer.Motion']}
                liveUrl="#"
                githubUrl="#"
              />
              <ProjectCard
                title="QUANTUM_CHAT.NEXUS"
                description="Real-time consciousness synchronization platform with quantum tunneling, private neural channels, and emotion-based reactions. Deployed across multiple dimensional nodes."
                tech={['React.Quantum', 'Socket.Neural', 'Express.Net', 'Redis.Cache', 'AWS.Dimension']}
                liveUrl="#"
                githubUrl="#"
              />
              <ProjectCard
                title="DATA_VISUALIZER.MATRIX"
                description="Interactive data consciousness dashboard with multi-dimensional chart rendering, neural filtering, and quantum export functionality. Processes massive data streams efficiently."
                tech={['Vue.Cyber', 'D3.Neural', 'Python.Matrix', 'FastAPI.Turbo', 'PostgreSQL.Prime']}
                liveUrl="#"
                githubUrl="#"
              />
              <ProjectCard
                title="MOBILE_PWA.NEXUS"
                description="Progressive consciousness application with offline neural caching, quantum push notifications, and responsive interface adaptation. Provides native-like experience across all devices."
                tech={['React.Mobile', 'ServiceWorkers.Neural', 'IndexedDB.Cache', 'WebPush.Quantum']}
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
      label: 'Connect',
      icon: <Wifi size={16} />,
      content: (
        <TerminalSection title="Establish Connection">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="scan-line">
                <h2 className="font-orbitron text-3xl font-black text-green-400 mb-6 uppercase tracking-wider neon-glow">
                  Neural_Link
                </h2>
                <p className="text-gray-300 font-fira-code leading-relaxed mb-8">
                  Ready to establish quantum communication protocols. 
                  Interested in collaborative neural projects and consciousness-expanding ventures.
                </p>
                
                <div className="space-y-6">
                  <div className="project-card">
                    <div className="flex items-center gap-4">
                      <Mail className="text-cyan-400" size={24} />
                      <div>
                        <div className="font-orbitron font-bold text-cyan-400 uppercase">Quantum_Mail</div>
                        <div className="text-sm text-gray-400 font-fira-code">cyber.dev@neural.net</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-card">
                    <div className="flex items-center gap-4">
                      <Github className="text-magenta-400" size={24} />
                      <div>
                        <div className="font-orbitron font-bold text-magenta-400 uppercase">Code_Archive</div>
                        <div className="text-sm text-gray-400 font-fira-code">github.com/cyber-developer</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-card">
                    <div className="flex items-center gap-4">
                      <Linkedin className="text-blue-400" size={24} />
                      <div>
                        <div className="font-orbitron font-bold text-blue-400 uppercase">Neural_Network</div>
                        <div className="text-sm text-gray-400 font-fira-code">linkedin.com/in/cyber-dev</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="scan-line">
                <h2 className="font-orbitron text-3xl font-black text-yellow-400 mb-6 uppercase tracking-wider neon-glow">
                  Transmit_Data
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block font-orbitron text-sm font-bold mb-2 text-cyan-400 uppercase tracking-wide">
                      User_ID
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 bg-black/50 border-2 border-cyan-400/50 text-cyan-400 font-fira-code text-sm focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
                      placeholder="Enter your identifier..."
                    />
                  </div>
                  <div>
                    <label className="block font-orbitron text-sm font-bold mb-2 text-cyan-400 uppercase tracking-wide">
                      Neural_Address
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 bg-black/50 border-2 border-cyan-400/50 text-cyan-400 font-fira-code text-sm focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
                      placeholder="your.neural@address.net"
                    />
                  </div>
                  <div>
                    <label className="block font-orbitron text-sm font-bold mb-2 text-cyan-400 uppercase tracking-wide">
                      Data_Stream
                    </label>
                    <textarea
                      rows={4}
                      className="w-full p-3 bg-black/50 border-2 border-cyan-400/50 text-cyan-400 font-fira-code text-sm resize-none focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
                      placeholder="Transmit your neural data..."
                    />
                  </div>
                  <button type="submit" className="anime-button w-full">
                    <Code className="inline mr-2" size={16} />
                    Initialize_Transmission
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
    <div className="min-h-screen p-4 md:p-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <WindowFrame title="NEURO_INTERFACE.EXE - Cyber Developer Console" className="shadow-2xl">
          <TabNavigation tabs={tabs} />
        </WindowFrame>
        
        {/* Anime-style Status Bar */}
        <div className="mt-6 anime-window p-4 flex items-center justify-between font-fira-code text-sm">
          <div className="flex items-center gap-6">
            <span className="text-green-400 font-bold uppercase">System Ready</span>
            <span className="text-cyan-400">|</span>
            <span className="flex items-center gap-2 text-cyan-400">
              <div className="w-2 h-2 bg-green-400 rounded-full pulse-neon"></div>
              Neural Link Active
            </span>
            <span className="text-cyan-400">|</span>
            <span className="text-magenta-400">Matrix Connected</span>
          </div>
          <div className="flex items-center gap-4 text-blue-400">
            <span>{new Date().toLocaleDateString()}</span>
            <span className="text-cyan-400">•</span>
            <span>{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
