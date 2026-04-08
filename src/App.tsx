import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Lock, 
  UserCheck, 
  MessageSquare, 
  RefreshCw, 
  AlertTriangle, 
  Facebook, 
  Instagram, 
  Send, 
  Star,
  ChevronRight,
  Menu,
  X,
  Globe,
  Zap,
  CheckCircle2,
  ArrowDown,
  Youtube,
  Smartphone,
  Quote
} from 'lucide-react';
import MatrixBackground from './components/MatrixBackground';

// Custom Futuristic Cyber Logo
const CyberLogo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
    <path d="M12 22V12" />
    <path d="M12 12l4-4" />
    <path d="M12 12l-4-4" />
    <circle cx="12" cy="12" r="2" fill="currentColor" className="animate-pulse" />
  </svg>
);

const services = [
  {
    icon: <RefreshCw className="w-8 h-8 text-cyber-green" />,
    title: "Account Recovery",
    description: "Expert assistance in recovering hacked or disabled social media accounts across all major platforms."
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-cyber-green" />,
    title: "Harassment Removal",
    description: "Fast and effective action to remove harmful content, harassment, and abuse from the digital space."
  },
  {
    icon: <Globe className="w-8 h-8 text-cyber-green" />,
    title: "Platform Fixing",
    description: "Technical support for complex issues on Facebook, Instagram, YouTube, and TikTok."
  },
  {
    icon: <X className="w-8 h-8 text-cyber-green" />,
    title: "Content Removal",
    description: "Legal and technical support to take down unauthorized videos or sensitive personal information."
  },
  {
    icon: <Shield className="w-8 h-8 text-cyber-green" />,
    title: "Cyber Consultation",
    description: "Professional advice on securing your digital identity and preventing future cyber threats."
  },
  {
    icon: <Zap className="w-8 h-8 text-cyber-green" />,
    title: "Premium Support",
    description: "Priority paid services for urgent cases requiring immediate attention and expert intervention."
  }
];

const platforms = [
  { name: "Facebook", icon: <Facebook className="w-10 h-10" />, color: "hover:text-blue-500" },
  { name: "Instagram", icon: <Instagram className="w-10 h-10" />, color: "hover:text-pink-500" },
  { name: "YouTube", icon: <Youtube className="w-10 h-10" />, color: "hover:text-red-500" },
  { name: "TikTok", icon: <Smartphone className="w-10 h-10" />, color: "hover:text-cyan-400" }
];

const testimonials = [
  {
    name: "Sarah J.",
    review: "Recovered my hacked account quickly. Highly recommended! I thought I lost everything, but Abir saved it.",
    rating: 5
  },
  {
    name: "Michael Chen",
    review: "Very professional and helpful service. He handled my harassment case with extreme care and speed.",
    rating: 5
  },
  {
    name: "Ahmed Al-Farsi",
    review: "ساعدني كثيراً في حل مشكلة حسابي. خبير حقيقي في الأمن السيبراني.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    review: "The best in the business. Removed a harmful video that was affecting my reputation within hours.",
    rating: 5
  }
];

const whyChooseMe = [
  {
    title: "Fast Response",
    description: "Time is critical in cyber emergencies. I provide rapid action to mitigate damage.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Trusted by Clients",
    description: "Hundreds of successful recoveries and satisfied clients worldwide.",
    icon: <UserCheck className="w-6 h-6" />
  },
  {
    title: "Secure & Confidential",
    description: "Your privacy is my top priority. All cases are handled with strict confidentiality.",
    icon: <Lock className="w-6 h-6" />
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <div className="relative min-h-screen selection:bg-cyber-green selection:text-black">
      <MatrixBackground />
      <div className="fixed inset-0 scanlines opacity-30 pointer-events-none z-50" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-green/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <CyberLogo className="w-8 h-8 text-cyber-green" />
            <span className="font-display font-bold text-xl tracking-tighter glow-green">ABIR HASAN</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {['About', 'Services', 'Platforms', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-mono text-gray-400 hover:text-cyber-green transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact"
              className="px-5 py-2 bg-cyber-green text-black font-bold text-sm rounded-sm hover:bg-white transition-colors border-glow-green"
            >
              GET HELP
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-cyber-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-cyber-dark pt-24 px-6 flex flex-col gap-6 lg:hidden"
          >
            {['About', 'Services', 'Platforms', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-display font-bold text-cyber-green"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
            {/* Profile Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mb-10"
            >
              <div className="w-32 h-32 rounded-full border-2 border-cyber-green glow-avatar overflow-hidden bg-cyber-dark flex items-center justify-center">
                <CyberLogo className="w-16 h-16 text-cyber-green" />
              </div>
              <div className="absolute inset-0 rounded-full animate-pulse bg-cyber-green/10" />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyber-green/50 rounded-full mb-8 bg-cyber-green/5 border-glow-green"
            >
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
              <span className="text-[10px] font-mono text-cyber-green tracking-[0.2em] uppercase font-bold">
                Cybersecurity Specialist
              </span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-7xl md:text-9xl font-display font-black mb-4 leading-none tracking-[0.1em] glow-green text-cyber-green italic"
            >
              ABIR HASAN
            </motion.h1>

            {/* Sub Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-cyber-blue font-display font-medium mb-6 tracking-wide"
            >
              Cybersecurity Specialist | Digital Protection Expert
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 max-w-xl mb-12 font-light text-lg"
            >
              Protecting People from Online Threats, Harassment & Digital Risks
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 mb-20"
            >
              <a 
                href="#contact"
                className="group relative px-10 py-4 bg-transparent border border-cyber-green text-cyber-green font-bold text-sm rounded-sm overflow-hidden border-glow-green transition-all hover:bg-cyber-green hover:text-black"
              >
                GET HELP NOW
              </a>
              <a 
                href="#about"
                className="px-10 py-4 border border-cyber-blue text-cyber-blue font-bold text-sm rounded-sm hover:bg-cyber-blue/10 transition-all border-glow-blue"
              >
                LEARN MORE
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex flex-col items-center gap-3"
            >
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em]">Scroll</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown className="w-4 h-4 text-cyber-green" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-32 px-6 overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#00FF00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyber-green/30 rounded-full mb-6 bg-cyber-green/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
                  <span className="text-[10px] font-mono text-cyber-green tracking-widest uppercase font-bold">About Me</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight tracking-tight italic">
                  Trusted <br />
                  <span className="text-cyber-green glow-green">Digital Protector</span>
                </h2>
                
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-xl">
                  <p>
                    I am <span className="text-white font-bold">Abir Hasan</span>, a skilled and trusted cybersecurity expert dedicated to helping people navigate and resolve online threats. 
                    With years of hands-on experience, I specialize in protecting individuals from digital harm.
                  </p>
                  <p>
                    My expertise covers <span className="text-cyber-blue">social media harassment resolution</span>, <span className="text-cyber-blue">account recovery</span>, 
                    and <span className="text-cyber-blue">harmful content removal</span> across major platforms including Facebook, Instagram, YouTube, and TikTok. 
                    I understand the urgency of these situations and act swiftly.
                  </p>
                  <p>
                    I am especially dedicated to helping victims of online harassment by taking fast, effective, and confidential action. 
                    Your digital safety and privacy are my top priorities.
                  </p>
                  <p>
                    I am a dedicated Cybersecurity Specialist with a mission to protect individuals from the growing threats of the digital world. 
                    My expertise lies in assisting victims of online harassment, recovering compromised social media accounts, and ensuring digital safety for all.
                  </p>
                  <p>
                    My approach is built on trust, confidentiality, and technical excellence. I don't just solve technical issues; 
                    I help people regain their peace of mind in an increasingly complex digital landscape.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    {platforms.map((p) => (
                      <div key={p.name} className="flex items-center gap-2 px-4 py-2 bg-cyber-dark border border-white/5 rounded-lg text-sm font-mono text-gray-500 hover:text-cyber-green hover:border-cyber-green/30 transition-all cursor-default">
                        {p.icon}
                        <span>{p.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Content - Glassmorphism Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative z-10 p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl">
                  <Quote className="w-12 h-12 text-cyber-green mb-8 opacity-50" />
                  <p className="text-2xl md:text-3xl font-display font-medium text-white italic leading-relaxed mb-10">
                    "My mission is to ensure that no one feels helpless in the face of digital threats. Security is not just a service; it's a fundamental right in the modern world."
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full border-2 border-cyber-green p-1">
                      <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center overflow-hidden">
                        <CyberLogo className="w-8 h-8 text-cyber-green" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-white">Abir Hasan</h4>
                      <p className="text-sm font-mono text-cyber-green">Cybersecurity Specialist</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Glows */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyber-green/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyber-blue/10 rounded-full blur-[100px] pointer-events-none" />
              </motion.div>
            </div>

            {/* Statistic Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Cases Resolved", value: "5000+" },
                { label: "Success Rate", value: "100%" },
                { label: "Support Available", value: "24/7" },
                { label: "Confidential", value: "100%" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-cyber-dark border border-white/5 hover:border-cyber-green/30 transition-all group relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <h3 className="text-4xl font-display font-black text-white mb-2 group-hover:text-cyber-green transition-colors">
                      {stat.value}
                    </h3>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-green/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Expert Services</h2>
              <p className="text-gray-500 font-mono">Comprehensive solutions for your digital security needs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-cyber-dark border border-cyber-green/10 rounded-xl hover:border-cyber-green/40 transition-all group relative overflow-hidden"
                >
                  <div className="mb-6 relative z-10">{service.icon}</div>
                  <h3 className="text-2xl font-display font-bold mb-4 relative z-10 group-hover:text-cyber-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed relative z-10">
                    {service.description}
                  </p>
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Shield className="w-24 h-24 text-cyber-green" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="py-24 px-6 bg-cyber-green/5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">Supported Platforms</h2>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24">
              {platforms.map((p, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col items-center gap-4 text-gray-500 transition-all duration-500 ${p.color} hover:scale-110`}
                >
                  {p.icon}
                  <span className="text-xs font-mono uppercase tracking-widest">{p.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Me */}
        <section id="why-me" className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-3 gap-12">
              {whyChooseMe.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-cyber-green text-black rounded-full flex items-center justify-center mx-auto mb-6 border-glow-green">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 px-6 bg-cyber-green/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Client Reviews</h2>
              <p className="text-gray-500 font-mono">What people say about my services</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-cyber-dark/50 border border-cyber-green/10 rounded-2xl relative"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cyber-green text-cyber-green" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-300 mb-6 italic">"{t.review}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyber-green/20 flex items-center justify-center font-bold text-cyber-green">
                      {t.name[0]}
                    </div>
                    <span className="font-display font-bold">{t.name}</span>
                  </div>
                  <MessageSquare className="absolute top-8 right-8 w-8 h-8 text-cyber-green/10" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 border-t border-cyber-green/10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-400 text-lg mb-12">
                Facing a cyber emergency? Don't wait. Reach out now for professional assistance. 
                I am available for consultation and premium support.
              </p>

              <p className="text-cyber-blue font-mono text-sm mb-6 italic">
                - If there is any cyber problem, please contact the Facebook or Instagram account..)
              </p>

              <div className="space-y-6">
                <a 
                  href="https://www.facebook.com/tera.abbu.abir.okh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-cyber-dark border border-cyber-green/10 rounded-lg hover:border-cyber-green transition-all group"
                >
                  <div className="w-12 h-12 bg-cyber-green/10 rounded-full flex items-center justify-center text-cyber-green group-hover:bg-cyber-green group-hover:text-black transition-all">
                    <Facebook />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-mono">Facebook</p>
                    <p className="font-display font-bold">Abir Hasan</p>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com/tera_bap_abir_ok_son/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-cyber-dark border border-cyber-green/10 rounded-lg hover:border-cyber-green transition-all group"
                >
                  <div className="w-12 h-12 bg-cyber-green/10 rounded-full flex items-center justify-center text-cyber-green group-hover:bg-cyber-green group-hover:text-black transition-all">
                    <Instagram />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-mono">Instagram</p>
                    <p className="font-display font-bold">@tera_bap_abir_ok_son</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 bg-cyber-dark border border-cyber-green/20 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-green/5 blur-3xl" />
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-cyber-dark border border-cyber-green/20 rounded-sm p-4 focus:border-cyber-green outline-none transition-all text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Message</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-cyber-dark border border-cyber-green/20 rounded-sm p-4 focus:border-cyber-green outline-none transition-all text-white resize-none"
                    placeholder="Describe your issue..."
                  />
                </div>
                <button 
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className="w-full py-4 bg-cyber-green text-black font-bold rounded-sm hover:bg-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {formStatus === 'idle' && (
                    <>SEND MESSAGE <Send className="w-4 h-4" /></>
                  )}
                  {formStatus === 'sending' && (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  )}
                  {formStatus === 'sent' && (
                    <><CheckCircle2 className="w-5 h-5" /> MESSAGE SENT</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-cyber-green/10 bg-cyber-dark text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-cyber-green" />
            <span className="font-display font-bold tracking-tighter glow-green">ABIR HASAN</span>
          </div>
          <p className="text-gray-500 text-sm font-mono">
            © {new Date().getFullYear()} Abir Hasan | Cyber Security Expert
          </p>
          <p className="text-[10px] text-gray-700 mt-4 uppercase tracking-[0.2em]">
            Secure. Trusted. Professional.
          </p>
        </div>
      </footer>
    </div>
  );
}


