
import React from 'react';
import WindowFrame from '../components/WindowFrame';
import TabNavigation from '../components/TabNavigation';
import TerminalSection from '../components/TerminalSection';
import ProjectCard from '../components/ProjectCard';
import { User, Mail, Home, Monitor, Github, Linkedin, Twitter, Code, Terminal } from 'lucide-react';

const Index = () => {
  const tabs = [
    {
      id: 'home',
      label: '~/home',
      icon: <Home size={14} />,
      content: (
        <TerminalSection title="whoami">
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="font-terminus text-4xl font-bold text-retro-darkblue mb-2">
                $ echo $USER
              </h1>
              <p className="text-xl text-retro-darkgray font-terminus">
                john@linux:~$ Full Stack Developer & DevOps Engineer
              </p>
            </div>
            
            <div className="terminal-text max-w-2xl mx-auto">
              <div className="text-green-400">
                john@debian:~$ cat /proc/version<br/>
                Linux version 6.1.0-13-amd64 (debian-kernel@lists.debian.org)<br/>
                <span className="text-cyan-300">
                  john@debian:~$ uptime<br/>
                  up 1337 days, 12:34, 2 users, load average: 0.15, 0.25, 0.30<br/>
                  <br/>
                  john@debian:~$ ps aux | grep skills<br/>
                  root    1337  0.1  2.5  React    Node.js    Python    Docker<br/>
                  root    1338  0.2  1.8  Kubernetes    AWS    Linux    Bash<br/>
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <ProjectCard
                title="Containerized Microservices Platform"
                description="Docker-based microservices architecture with Kubernetes orchestration, CI/CD pipelines, and monitoring stack using Prometheus and Grafana."
                tech={['Docker', 'Kubernetes', 'Go', 'PostgreSQL', 'Prometheus']}
                liveUrl="#"
                githubUrl="#"
              />
              <ProjectCard
                title="Infrastructure as Code Pipeline"
                description="Terraform-managed AWS infrastructure with automated deployments, monitoring, and scaling. Includes VPC, EKS cluster, and RDS setup."
                tech={['Terraform', 'AWS', 'Jenkins', 'Ansible', 'Bash']}
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
      label: '/etc/passwd',
      icon: <User size={14} />,
      content: (
        <TerminalSection title="cat /home/john/.profile">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-terminus text-2xl font-bold text-retro-darkblue mb-4">
                  john@linux:~$ history | tail -20
                </h2>
                <div className="terminal-text text-sm mb-4">
                  <div className="text-green-400">
                    1015  sudo apt update && sudo apt upgrade<br/>
                    1016  docker-compose up -d<br/>
                    1017  kubectl get pods -A<br/>
                    1018  vim ~/.bashrc<br/>
                    1019  git commit -m "feat: add monitoring"<br/>
                    1020  ssh production-server<br/>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Linux enthusiast with 5+ years of experience in system administration, 
                  DevOps, and full-stack development. Passionate about open-source 
                  technologies and automation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When not in the terminal, you can find me contributing to open-source 
                  projects, configuring Arch Linux, or exploring new container technologies.
                </p>
              </div>
              
              <div>
                <h2 className="font-terminus text-2xl font-bold text-retro-darkblue mb-4">
                  $ ls -la /home/john/skills/
                </h2>
                <div className="space-y-3">
                  {[
                    { category: 'Systems', skills: ['Linux', 'Docker', 'Kubernetes', 'Nginx'] },
                    { category: 'Languages', skills: ['Python', 'Go', 'Bash', 'JavaScript'] },
                    { category: 'DevOps', skills: ['Terraform', 'Ansible', 'Jenkins', 'GitLab CI'] },
                    { category: 'Cloud', skills: ['AWS', 'DigitalOcean', 'Prometheus', 'Grafana'] },
                  ].map((group) => (
                    <div key={group.category} className="retro-window p-3">
                      <h3 className="font-terminus font-semibold text-sm text-retro-darkblue mb-2">
                        drwxr-xr-x {group.category.toLowerCase()}/
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
      label: '/var/www',
      icon: <Terminal size={14} />,
      content: (
        <TerminalSection title="ls -la ~/projects">
          <div className="space-y-6">
            <div className="terminal-text text-sm mb-4">
              <div className="text-green-400">
                john@debian:~/projects$ find . -name "*.git" -type d<br/>
                ./kubernetes-homelab/.git<br/>
                ./monitoring-stack/.git<br/>
                ./dotfiles/.git<br/>
                ./web-scraper/.git<br/>
              </div>
            </div>
            <div className="grid gap-6">
              <ProjectCard
                title="Kubernetes Homelab Setup"
                description="Complete homelab infrastructure running on Raspberry Pi cluster with K3s, ArgoCD, and self-hosted services including Nextcloud, Gitea, and Jellyfin."
                tech={['K3s', 'ArgoCD', 'Raspberry Pi', 'Helm', 'MetalLB']}
                liveUrl="#"
                githubUrl="#"
              />
              <ProjectCard
                title="Monitoring & Observability Stack"
                description="Comprehensive monitoring solution with Prometheus, Grafana, Loki, and Jaeger. Includes custom dashboards and alerting rules for infrastructure monitoring."
                tech={['Prometheus', 'Grafana', 'Loki', 'Jaeger', 'AlertManager']}
                liveUrl="#"
                githubUrl="#"
              />
              <ProjectCard
                title="Dotfiles & System Configuration"
                description="Automated system configuration management with Ansible playbooks for Ubuntu/Arch Linux. Includes Neovim, Zsh, Tmux, and i3wm configurations."
                tech={['Ansible', 'Bash', 'Neovim', 'i3wm', 'Zsh']}
                liveUrl="#"
                githubUrl="#"
              />
              <ProjectCard
                title="Distributed Web Scraper"
                description="Scalable web scraping system built with Python and Redis. Deployed on Docker Swarm with automatic scaling and data pipeline to PostgreSQL."
                tech={['Python', 'Redis', 'Docker Swarm', 'PostgreSQL', 'Celery']}
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
      label: '/dev/contact',
      icon: <Mail size={14} />,
      content: (
        <TerminalSection title="cat /etc/hosts | grep contact">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-terminus text-2xl font-bold text-retro-darkblue mb-4">
                  john@debian:~$ ping contact.local
                </h2>
                <div className="terminal-text text-sm mb-4">
                  <div className="text-green-400">
                    PING contact.local (127.0.0.1) 56(84) bytes of data.<br/>
                    64 bytes from localhost: icmp_seq=1 ttl=64 time=0.025 ms<br/>
                    <span className="text-cyan-300">
                      --- contact.local ping statistics ---<br/>
                      Connection established. Ready to receive messages.
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="retro-window p-4">
                    <div className="flex items-center gap-3">
                      <Mail className="text-retro-darkblue" size={20} />
                      <div>
                        <div className="font-terminus font-semibold">$ mail -s "Hello"</div>
                        <div className="text-sm text-gray-600">john@linux-dev.local</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="retro-window p-4">
                    <div className="flex items-center gap-3">
                      <Github className="text-retro-darkblue" size={20} />
                      <div>
                        <div className="font-terminus font-semibold">$ git remote -v</div>
                        <div className="text-sm text-gray-600">github.com/johnlinux</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="retro-window p-4">
                    <div className="flex items-center gap-3">
                      <Linkedin className="text-retro-darkblue" size={20} />
                      <div>
                        <div className="font-terminus font-semibold">$ curl -I linkedin.com/in/johnlinux</div>
                        <div className="text-sm text-gray-600">HTTP/1.1 200 OK</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="font-terminus text-2xl font-bold text-retro-darkblue mb-4">
                  $ sudo nano /var/mail/compose
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block font-terminus text-sm font-semibold mb-1">
                      From: user@$(hostname)
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border-2 border-retro-border bg-black text-green-400 font-terminus text-sm"
                      placeholder="your-username"
                    />
                  </div>
                  <div>
                    <label className="block font-terminus text-sm font-semibold mb-1">
                      To: john@linux-dev.local
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 border-2 border-retro-border bg-black text-green-400 font-terminus text-sm"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                  <div>
                    <label className="block font-terminus text-sm font-semibold mb-1">
                      Subject: $(cat message.txt)
                    </label>
                    <textarea
                      rows={4}
                      className="w-full p-2 border-2 border-retro-border bg-black text-green-400 font-terminus text-sm resize-none"
                      placeholder="Enter your message here...
# Lines starting with # are comments
# Press Ctrl+X to save and exit"
                    />
                  </div>
                  <button type="submit" className="retro-button">
                    $ sendmail -t
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
        <WindowFrame title="john@debian:~$ ./portfolio.sh --interactive" className="shadow-window">
          <TabNavigation tabs={tabs} />
        </WindowFrame>
        
        {/* Status Bar */}
        <div className="mt-4 bg-retro-gray border-2 border-retro-border p-2 flex items-center justify-between text-xs font-terminus">
          <div className="flex items-center gap-4">
            <span>john@debian:~$</span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              SSH Connected
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>Load: 0.15</span>
            <span>|</span>
            <span>Uptime: 1337 days</span>
            <span>|</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
