"use client"

import { useState, useEffect, useRef } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Users,
  Clock,
  Shield,
  Cpu,
  Database,
  FileText,
  ExternalLink,
  ShoppingCart,
  Heart,
  DollarSign,
  Newspaper,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const taglineWords = [
  "AI Automation",
  "Decentralized Intelligence",
  "Smart Agents",
  "Future Technology",
  "Intelligent Systems",
]

const trustedLogos = [
  { name: "TechCorp", logo: "TC" },
  { name: "InnovateLab", logo: "IL" },
  { name: "FutureFlow", logo: "FF" },
  { name: "DataDrive", logo: "DD" },
  { name: "CloudSync", logo: "CS" },
  { name: "AIFirst", logo: "AF" },
  { name: "NextGen", logo: "NG" },
  { name: "SmartOps", logo: "SO" },
]

const facts = [
  {
    title: "99.9% Uptime",
    description: "Reliable AI infrastructure that never sleeps",
    icon: <Zap className="w-5 h-5" />,
    link: "https://example.com/uptime",
  },
  {
    title: "50+ Integrations",
    description: "Seamless connectivity with your tools",
    icon: <Globe className="w-5 h-5" />,
    link: "https://example.com/integrations",
  },
  {
    title: "10,000+ Users",
    description: "Trusted by developers worldwide",
    icon: <Users className="w-5 h-5" />,
    link: "https://example.com/users",
  },
  {
    title: "24/7 Support",
    description: "Expert assistance when you need it",
    icon: <Clock className="w-5 h-5" />,
    link: "https://example.com/support",
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade protection for your data",
    icon: <Shield className="w-5 h-5" />,
    link: "https://example.com/security",
  },
  {
    title: "Real-time Processing",
    description: "Instant responses at scale",
    icon: <Cpu className="w-5 h-5" />,
    link: "https://example.com/processing",
  },
  {
    title: "Scalable Infrastructure",
    description: "Grows seamlessly with your needs",
    icon: <Database className="w-5 h-5" />,
    link: "https://example.com/infrastructure",
  },
  {
    title: "AI-Powered Analytics",
    description: "Deep insights from your data",
    icon: <Sparkles className="w-5 h-5" />,
    link: "https://example.com/analytics",
  },
]

const moduleContent = {
  what: {
    title: "What We Do",
    content:
      "We build intelligent AI agents that automate complex workflows, enabling businesses to scale efficiently while maintaining human oversight and control.",
  },
  where: {
    title: "Where We Operate",
    content:
      "Our decentralized infrastructure spans globally, providing low-latency AI services across North America, Europe, and Asia-Pacific regions.",
  },
  how: {
    title: "How It Works",
    content:
      "Through our intuitive platform, you can design, deploy, and manage AI agents using simple drag-and-drop interfaces backed by powerful machine learning models.",
  },
  who: {
    title: "Who We Serve",
    content:
      "From startups to Fortune 500 companies, we empower organizations across healthcare, finance, e-commerce, and technology sectors.",
  },
  when: {
    title: "When to Start",
    content:
      "The future of AI automation is now. Begin your journey today with our free tier and scale as your needs grow.",
  },
}

const researchPapers = [
  {
    title: "Decentralized AI: A New Paradigm for Autonomous Systems",
    authors: "Dr. Sarah Chen, Prof. Michael Rodriguez",
    journal: "Nature AI",
    year: "2024",
    description:
      "Exploring the foundations of distributed artificial intelligence and its implications for scalable automation.",
    link: "https://example.com/paper-1",
  },
  {
    title: "Efficient Multi-Agent Coordination in Complex Environments",
    authors: "Dr. Alex Thompson, Dr. Lisa Wang",
    journal: "IEEE Transactions on AI",
    year: "2024",
    description: "Novel approaches to coordinating multiple AI agents for optimal performance in dynamic scenarios.",
    link: "https://example.com/paper-2",
  },
  {
    title: "Privacy-Preserving Machine Learning in Decentralized Networks",
    authors: "Prof. David Kim, Dr. Emma Johnson",
    journal: "ACM Computing Surveys",
    year: "2023",
    description: "Comprehensive analysis of privacy-preserving techniques in distributed AI systems.",
    link: "https://example.com/paper-3",
  },
  {
    title: "Real-time Decision Making in Autonomous Agent Networks",
    authors: "Dr. Robert Martinez, Dr. Jennifer Lee",
    journal: "Science Robotics",
    year: "2023",
    description: "Investigating real-time decision-making capabilities in large-scale autonomous agent deployments.",
    link: "https://example.com/paper-4",
  },
]

export default function LandingPage() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const [currentFactIndex, setCurrentFactIndex] = useState(0)
  const [activeModule, setActiveModule] = useState("what")
  const [currentLogoSet, setCurrentLogoSet] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const factIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglineWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentLogoSet((prev) => (prev + 1) % Math.ceil(trustedLogos.length / 4))
    }, 4000)
    return () => clearInterval(logoInterval)
  }, [])

  // Setup the auto-cycling interval
  const setupFactInterval = () => {
    // Clear any existing interval
    if (factIntervalRef.current) {
      clearInterval(factIntervalRef.current)
    }

    // Set a new interval
    factIntervalRef.current = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentFactIndex((prev) => (prev + 1) % facts.length)
        setIsTransitioning(false)
      }, 250)
    }, 3000)
  }

  // Initialize the interval on component mount
  useEffect(() => {
    setupFactInterval()

    // Clean up on component unmount
    return () => {
      if (factIntervalRef.current) {
        clearInterval(factIntervalRef.current)
      }
    }
  }, [])

  const nextFact = () => {
    // Reset the interval
    setupFactInterval()

    // Handle the transition
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentFactIndex((prev) => (prev + 1) % facts.length)
      setIsTransitioning(false)
    }, 250)
  }

  const prevFact = () => {
    // Reset the interval
    setupFactInterval()

    // Handle the transition
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentFactIndex((prev) => (prev - 1 + facts.length) % facts.length)
      setIsTransitioning(false)
    }, 250)
  }

  const getVisibleLogos = () => {
    const startIndex = currentLogoSet * 4
    return trustedLogos.slice(startIndex, startIndex + 4)
  }

  const getVisibleFacts = () => {
    const visibleCount = 3
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentFactIndex + i) % facts.length
      result.push(facts[index])
    }
    return result
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-neutral-100">
      {/* Hero Section with Trusted By */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-50/30 to-transparent"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-rose-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-200/20 to-fuchsia-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto flex-1 flex flex-col justify-center">
          {/* Logo placeholder with subtle animation */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-rose-400 to-fuchsia-500 rounded-2xl shadow-2xl shadow-rose-500/25 flex items-center justify-center transform hover:scale-105 transition-all duration-500 hover:shadow-rose-500/40">
              <Sparkles className="w-16 h-16 text-white animate-pulse" />
            </div>
            <div className="absolute inset-0 w-40 h-40 mx-auto rounded-2xl bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500 opacity-0 hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-light text-slate-800 mb-4 tracking-tight">Agenta Labs</h1>

          <div className="text-lg md:text-2xl text-slate-600 mb-6 h-12 flex items-center justify-center">
            <span className="mr-3">Building the future of</span>
            <span
              key={currentTagline}
              className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-600 font-medium animate-fade-in"
            >
              {taglineWords[currentTagline]}
            </span>
          </div>

          <p className="text-xl text-slate-500 mb-8 max-w-3xl mx-auto leading-relaxed">
            Simplicity achieved through the right perspective upon chaos. We transform complex AI challenges into
            elegant, automated solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:from-rose-600 hover:to-fuchsia-700 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 via-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></span>
              <span className="relative flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 text-slate-700 hover:border-rose-400 hover:text-rose-600 px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/10"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Trusted By Section - Inside Hero */}
        <div className="relative z-10 py-12 px-6 w-full">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-slate-600 text-lg mb-8">Trusted by:</p>
            <div className="flex justify-center items-center gap-8 md:gap-12">
              {getVisibleLogos().map((company, index) => (
                <div
                  key={`${company.name}-${currentLogoSet}`}
                  className="flex items-center justify-center w-16 h-16 bg-white/70 rounded-xl shadow-sm border border-slate-200/50 hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-slate-600 font-medium text-sm">{company.logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-fuchsia-100/60 via-purple-100/50 to-violet-100/40 relative overflow-hidden">
        {/* Subtle floating elements - more of them with varied animations */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-rose-300/40 rounded-full animate-float-slow"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-fuchsia-400/50 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-pink-300/30 rounded-full animate-float-gentle"></div>

        {/* Additional subtle flares */}
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-200/20 rounded-full animate-pulse-gentle"></div>
        <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-fuchsia-300/15 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-violet-400/10 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-pink-200/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-indigo-300/15 rounded-full animate-float-delayed"></div>
        <div className="absolute top-3/4 left-10 w-1.5 h-1.5 bg-purple-300/20 rounded-full animate-drift-left"></div>
        <div className="absolute bottom-10 right-1/4 w-1 h-1 bg-fuchsia-200/25 rounded-full animate-drift-right"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6 leading-tight">
                What is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-600">
                  Agenta Labs
                </span>
                ?
              </h2>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                We are pioneers in decentralized artificial intelligence, creating autonomous agents that think, learn,
                and adapt to solve complex business challenges.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                Our platform combines cutting-edge machine learning with intuitive design, enabling organizations to
                deploy intelligent automation without the complexity traditionally associated with AI implementation.
              </p>
            </div>

            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-700 hover:scale-105">
                <div className="grid grid-cols-2 gap-6">
                  <a
                    href="https://example.com/ai-agents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center p-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-fuchsia-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-rose-600" />
                    </div>
                    <h4 className="font-medium text-slate-800 mb-2">AI Agents</h4>
                    <p className="text-sm text-slate-600">Intelligent automation</p>
                  </a>
                  <a
                    href="https://example.com/decentralized"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center p-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-fuchsia-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                      <Globe className="w-6 h-6 text-rose-600" />
                    </div>
                    <h4 className="font-medium text-slate-800 mb-2">Decentralized</h4>
                    <p className="text-sm text-slate-600">Global infrastructure</p>
                  </a>
                  <a
                    href="https://example.com/real-time"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center p-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-fuchsia-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-rose-600" />
                    </div>
                    <h4 className="font-medium text-slate-800 mb-2">Real-time</h4>
                    <p className="text-sm text-slate-600">Instant responses</p>
                  </a>
                  <a
                    href="https://example.com/scalable"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center p-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-fuchsia-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                      <Users className="w-6 h-6 text-rose-600" />
                    </div>
                    <h4 className="font-medium text-slate-800 mb-2">Scalable</h4>
                    <p className="text-sm text-slate-600">Grows with you</p>
                  </a>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-rose-400/20 to-fuchsia-500/20 rounded-full blur-sm animate-pulse-gentle"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-pink-400/15 to-violet-500/15 rounded-full blur-md animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts Carousel */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-slate-800 text-center mb-16">Why Choose Agenta Labs</h2>

          <div className="relative overflow-hidden px-8 py-8">
            <div
              className={`flex gap-6 justify-center transition-all duration-500 ease-out ${
                isTransitioning ? "transform translate-x-8 opacity-60" : "transform translate-x-0 opacity-100"
              }`}
            >
              {getVisibleFacts().map((fact, index) => (
                <a
                  key={`${fact.title}-${currentFactIndex}-${index}`}
                  href={fact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="flex-shrink-0 w-64 bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:scale-105 cursor-pointer transform">
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center mb-4">
                        <div className="p-3 bg-gradient-to-br from-rose-100 to-fuchsia-100 rounded-xl text-rose-600 group-hover:rotate-12 transition-transform duration-300">
                          {fact.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-medium text-slate-800 mb-2">{fact.title}</h3>
                      <p className="text-sm text-slate-600">{fact.description}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={prevFact}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-slate-300 hover:border-rose-400 hover:text-rose-600 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 bg-white/80 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextFact}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-slate-300 hover:border-rose-400 hover:text-rose-600 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 bg-white/80 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Subtle background animations */}
        <div className="absolute top-20 right-10 w-3 h-3 bg-rose-200/30 rounded-full animate-drift-right"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-fuchsia-300/40 rounded-full animate-drift-left"></div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-slate-800 text-center mb-4">Success Stories</h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
            See how leading organizations are transforming their operations with Agenta Labs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: "TechCorp",
                industry: "E-commerce",
                result: "300% efficiency increase",
                description:
                  "Automated customer service operations, reducing response time from hours to seconds while maintaining 98% satisfaction rates.",
                metric: "98% satisfaction",
                iconColor: "from-blue-500 to-cyan-600",
                icon: <ShoppingCart className="w-6 h-6" />,
                link: "https://example.com/case-techcorp",
              },
              {
                company: "HealthPlus",
                industry: "Healthcare",
                result: "50% cost reduction",
                description:
                  "Streamlined patient data processing and appointment scheduling, allowing staff to focus on patient care.",
                metric: "$2M saved annually",
                iconColor: "from-green-500 to-emerald-600",
                icon: <Heart className="w-6 h-6" />,
                link: "https://example.com/case-healthplus",
              },
              {
                company: "FinanceFlow",
                industry: "Financial Services",
                result: "99.9% accuracy",
                description:
                  "Implemented intelligent fraud detection and risk assessment, processing millions of transactions daily.",
                metric: "0.01% false positives",
                iconColor: "from-amber-500 to-orange-600",
                icon: <DollarSign className="w-6 h-6" />,
                link: "https://example.com/case-financeflow",
              },
            ].map((caseStudy, index) => (
              <a
                key={index}
                href={caseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-500 hover:scale-105 group-hover:shadow-rose-500/30 group-hover:bg-gradient-to-br group-hover:from-white/80 group-hover:to-rose-50/50">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-8 h-8 bg-gradient-to-r ${caseStudy.iconColor} rounded-lg flex items-center justify-center text-white`}
                      >
                        {caseStudy.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                        {caseStudy.industry}
                      </span>
                    </div>

                    <h3 className="text-2xl font-medium text-slate-800 mb-2">{caseStudy.company}</h3>
                    <div className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-fuchsia-600 mb-4">
                      {caseStudy.result}
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed">{caseStudy.description}</p>

                    <div className="pt-4 border-t border-slate-200/50">
                      <span className="text-lg font-medium text-slate-700">{caseStudy.metric}</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Reports Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-100/50 to-stone-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-800 mb-4">Research & Publications</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Advancing the field of AI through cutting-edge research and peer-reviewed publications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchPapers.map((paper, index) => (
              <a
                key={index}
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <Card className="bg-white/80 backdrop-blur-sm border-slate-200/50 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:scale-105 group-hover:border-red-200/60">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-rose-600" />
                        <span className="text-sm font-medium text-slate-500">{paper.journal}</span>
                      </div>
                      <span className="text-sm text-slate-400">{paper.year}</span>
                    </div>

                    <h3 className="text-xl font-medium text-slate-800 mb-3 leading-tight">{paper.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{paper.authors}</p>
                    <p className="text-slate-600 mb-6 leading-relaxed">{paper.description}</p>

                    <div className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium transition-colors duration-300 group-hover:gap-3">
                      Read Paper
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Modular Content Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-slate-800 text-center mb-16">Discover Our Approach</h2>

          <div className="grid lg:grid-cols-4 gap-12 items-start">
            <div className="space-y-2">
              {Object.entries(moduleContent).map(([key, _]) => (
                <button
                  key={key}
                  onClick={() => setActiveModule(key)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 text-sm ${
                    activeModule === key
                      ? "bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white shadow-lg shadow-rose-500/25 scale-105"
                      : "bg-white/70 text-slate-700 hover:bg-white hover:shadow-md hover:shadow-slate-200/50 hover:scale-102"
                  }`}
                >
                  <span className="font-medium capitalize">{key}</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-3">
              <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-xl shadow-slate-200/50 min-h-[300px]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-medium text-slate-800 mb-6">
                    {moduleContent[activeModule as keyof typeof moduleContent].title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {moduleContent[activeModule as keyof typeof moduleContent].content}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-100/80 via-stone-100/80 to-neutral-150/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-slate-800 mb-4">Stay Connected</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Follow our journey and get the latest insights on AI, automation, and decentralized intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <a href="https://blog.agentalabs.com" target="_blank" rel="noopener noreferrer" className="group">
              <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <Newspaper className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-slate-800 mb-2">News</h3>
                  <p className="text-sm text-slate-600">Latest insights & tutorials</p>
                </CardContent>
              </Card>
            </a>

            <a href="https://x.com/agentalabs" target="_blank" rel="noopener noreferrer" className="group">
              <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-medium text-slate-800 mb-2">X</h3>
                  <p className="text-sm text-slate-600">Real-time updates & news</p>
                </CardContent>
              </Card>
            </a>

            <a
              href="https://linkedin.com/company/agentalabs"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <Linkedin className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="font-medium text-slate-800 mb-2">LinkedIn</h3>
                  <p className="text-sm text-slate-600">Professional insights</p>
                </CardContent>
              </Card>
            </a>

            <a href="https://github.com/agentalabs" target="_blank" rel="noopener noreferrer" className="group">
              <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                    <Github className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="font-medium text-slate-800 mb-2">GitHub</h3>
                  <p className="text-sm text-slate-600">Open source projects</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-stone-50 to-neutral-100 relative overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-16 left-20 w-1 h-1 bg-rose-400/60 rounded-full animate-twinkle"></div>
        <div className="absolute bottom-24 right-32 w-2 h-2 bg-fuchsia-300/50 rounded-full animate-twinkle-delayed"></div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-800 mb-4">Let's Build Something Amazing</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to explore how Agenta Labs can transform your business? Get in touch with our team.
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-slate-200/50 shadow-xl shadow-slate-200/50">
            <CardContent className="p-12">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 transition-all duration-300 bg-white/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 transition-all duration-300 bg-white/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 transition-all duration-300 bg-white/50"
                    placeholder="Your company name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20 transition-all duration-300 bg-white/50 resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:from-rose-600 hover:to-fuchsia-700 text-white px-12 py-4 text-lg font-medium rounded-xl shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all duration-300 hover:scale-105"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 via-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></span>
                    <span className="relative flex items-center gap-2">
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light text-slate-800 mb-8">Ready to Transform Your Workflow?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Join thousands of forward-thinking companies already using Agenta Labs to automate their most complex
            processes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:from-rose-600 hover:to-fuchsia-700 text-white px-10 py-5 text-xl font-medium rounded-xl shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 via-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></span>
              <span className="relative">Start Free Trial</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 text-slate-700 hover:border-rose-400 hover:text-rose-600 px-10 py-5 text-xl rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/10"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-fuchsia-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-light">Agenta Labs</span>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Transforming chaos into clarity through intelligent automation and decentralized AI solutions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors duration-300">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors duration-300">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors duration-300">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors duration-300">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors duration-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors duration-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">© 2024 Agenta Labs. All rights reserved.</p>

            <div className="flex gap-4">
              <a href="#" className="p-2 text-slate-400 hover:text-rose-400 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-rose-400 transition-colors duration-300">
                <div className="w-5 h-5 bg-slate-400 hover:bg-rose-400 rounded-sm flex items-center justify-center transition-colors duration-300">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-slate-900">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-rose-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-slate-400 hover:text-rose-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
