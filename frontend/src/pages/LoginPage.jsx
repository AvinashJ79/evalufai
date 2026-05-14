import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Mail, Lock, Eye, EyeOff, GitBranch, Globe, ShieldCheck, Quote } from 'lucide-react';

const LoginPage = ({ setView }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const quotes = [
    {
      text: "EvalufAI has transformed how we validate technical skills. The AI proctoring is a game-changer.",
      author: "Sarah Chen",
      role: "Head of Talent, TechCorp"
    },
    {
      text: "The most seamless hiring experience I've ever encountered. High integrity and zero bias.",
      author: "Marcus Rodriguez",
      role: "Senior Recruiter, InnovateHQ"
    },
    {
      text: "Finally, a platform that actually understands coding proficiency without manual review.",
      author: "Alex Rivera",
      role: "CTO, FutureScale"
    }
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  // Rotate quotes
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side: Branding & Visuals */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-50 border-r border-slate-100">
        {/* Abstract Wave Background (Simulated with SVG & Motion) */}
        <div className="absolute inset-0 z-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              animate={{
                d: [
                  "M0,400 C150,300 350,500 500,400 C650,300 800,400 800,400 L800,800 L0,800 Z",
                  "M0,400 C200,500 400,300 600,400 C800,500 800,400 800,400 L800,800 L0,800 Z",
                  "M0,400 C150,300 350,500 500,400 C650,300 800,400 800,400 L800,800 L0,800 Z"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              fill="#e0e7ff"
            />
            <motion.path
              animate={{
                d: [
                  "M0,500 C200,400 400,600 600,500 C800,400 800,500 800,500 L800,800 L0,800 Z",
                  "M0,500 C150,600 350,400 550,500 C750,600 800,500 800,500 L800,800 L0,800 Z",
                  "M0,500 C200,400 400,600 600,500 C800,400 800,500 800,500 L800,800 L0,800 Z"
                ]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              fill="#dbeafe"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 z-1 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />

        <div className="relative z-10 p-16 flex flex-col justify-between w-full">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('landing')}>
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-200">
              <Zap className="text-white w-7 h-7 fill-current" />
            </div>
            <span className="text-3xl font-display font-bold text-slate-900">
              Evaluf<span className="text-indigo-600">AI</span>
            </span>
          </div>

          {/* Content / Quotes */}
          <div className="max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <Quote className="w-12 h-12 text-indigo-400 opacity-50" />
                <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                  "{quotes[currentQuote].text}"
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
                    {quotes[currentQuote].author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{quotes[currentQuote].author}</p>
                    <p className="text-sm text-slate-500">{quotes[currentQuote].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Info */}
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Enterprise Secure
            </span>
            <span>© 2026 EvalufAI</span>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-10">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Sign In</h1>
            <p className="text-slate-500">Welcome back! Please enter your details.</p>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-all hover:border-slate-300">
              <Globe className="w-5 h-5 text-blue-500" />
              Google
            </button>
            <button className="flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-all hover:border-slate-300">
              <GitBranch className="w-5 h-5" />
              GitHub
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">or email</span>
            </div>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Password</label>
                <button type="button" className="text-sm font-bold text-indigo-600 hover:text-indigo-700">Forgot?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 px-1">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
              <label htmlFor="remember" className="text-sm text-slate-600 font-medium cursor-pointer">Remember for 30 days</label>
            </div>

            <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 hover:-translate-y-0.5 active:translate-y-0">
              Sign In
            </button>
          </form>

          <p className="text-center text-slate-600 font-medium">
            Don't have an account?{' '}
            <button 
              onClick={() => setView('book-demo')}
              className="text-indigo-600 font-bold hover:underline"
            >
              Contact Sales
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
