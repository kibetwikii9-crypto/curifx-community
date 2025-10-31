import React from 'react'
import { Link } from 'react-router-dom'
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Shield, 
  Zap, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Calendar
} from 'lucide-react'
import Card from '../components/Card'

const Landing = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Live Trading Sessions",
      description: "Join professional traders in real-time trading sessions and learn their strategies.",
      color: "text-primary-accent"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Get personalized guidance from experienced traders with proven track records.",
      color: "text-primary-gold"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Courses",
      description: "Access structured learning paths from beginner to advanced trading strategies.",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Learn proper risk management techniques to protect your trading capital.",
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "Trading Signals",
      description: "Receive high-quality trading signals from our community of expert traders.",
      color: "text-purple-400"
    },
    {
      icon: Target,
      title: "Performance Tracking",
      description: "Monitor your progress with detailed analytics and leaderboards.",
      color: "text-orange-400"
    }
  ]

  const stats = [
    { number: "2,847", label: "Active Members" },
    { number: "156", label: "Expert Mentors" },
    { number: "89%", label: "Success Rate" },
    { number: "$2.4M", label: "Total Profits" }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Trader",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      content: "ForexPro Community transformed my trading. The mentorship program helped me increase my profits by 300% in just 6 months.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Day Trader",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      content: "The live trading sessions are incredible. Learning from real professionals in real-time has been game-changing.",
      rating: 5
    },
    {
      name: "Elena Volkov",
      role: "Swing Trader",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      content: "Best forex community I've ever joined. The quality of education and support is unmatched.",
      rating: 5
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-12 py-20">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Master Forex Trading with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-highlight-gold">CuriFX</span>
          </h1>
          <p className="text-lg text-secondary-text max-w-md leading-relaxed">
            Join the most successful forex trading community. Learn from experts, 
            access live signals, and transform your trading with proven strategies.
          </p>
          <div className="flex gap-4 mt-6">
            <Link to="/community" className="btn-primary flex items-center gap-2">
              Join Community
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/courses" className="btn-secondary flex items-center gap-2">
              View Courses
              <BookOpen className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        <div className="relative">
          <div className="max-h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=500&fit=crop"
              alt="Trading Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-4 -right-4 bg-primary-accent text-white px-4 py-2 rounded-xl font-semibold">
            Live Trading
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-12 bg-primary-card/30">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose ForexPro Community?
            </h2>
            <p className="text-lg text-primary-text-secondary max-w-2xl mx-auto">
              We provide everything you need to become a successful forex trader
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} hover className="h-[280px] p-6 flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-primary-border flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-primary-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex items-center text-primary-accent font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-12 bg-primary-card/30">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Members Say
            </h2>
            <p className="text-lg text-primary-text-secondary">
              Join thousands of satisfied traders who have transformed their trading
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary-gold fill-current" />
                  ))}
                </div>
                <p className="text-primary-text-secondary mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-primary-text-secondary">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <div className="bg-gradient-to-r from-primary-accent/10 to-primary-gold/10 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-lg text-secondary-text mb-8 max-w-2xl mx-auto">
              Join CuriFX Community Hub today and start your journey to trading success. 
              Get access to expert mentors, live sessions, and a supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/community" className="btn-primary text-lg px-8 py-4">
                Join Community Now
              </Link>
              <Link to="/courses" className="btn-secondary text-lg px-8 py-4">
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050A12] py-16 px-6 lg:px-12 border-t border-primary-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 text-white font-heading font-bold text-xl mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-green via-accent-green to-highlight-gold rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl">KayFX</span>
                  <span className="text-xs text-secondary-text font-normal">Trading Community</span>
                </div>
              </div>
              <p className="text-secondary-text mb-6 leading-relaxed">
                The ultimate destination for forex traders to learn, grow, and succeed together. 
                Join thousands of successful traders worldwide.
              </p>
              <div className="flex gap-4">
                <Link to="/track-records" className="px-4 py-2 bg-accent-green/10 text-accent-green rounded-lg hover:bg-accent-green/20 transition-colors duration-200 text-sm font-medium">
                  View Track Records
                </Link>
              </div>
            </div>
            
            {/* Trading */}
            <div>
              <h3 className="font-semibold text-white mb-6 text-lg">Trading</h3>
              <ul className="space-y-3 text-secondary-text">
                <li><Link to="/track-records" className="hover:text-accent-green transition-colors duration-200 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Track Records
                </Link></li>
                <li><Link to="/signals" className="hover:text-accent-green transition-colors duration-200 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Trading Signals
                </Link></li>
                <li><Link to="/courses" className="hover:text-accent-green transition-colors duration-200 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Courses
                </Link></li>
                <li><Link to="/mentorship" className="hover:text-accent-green transition-colors duration-200 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Mentorship
                </Link></li>
              </ul>
            </div>
            
            {/* Community */}
            <div>
              <h3 className="font-semibold text-white mb-6 text-lg">Community</h3>
              <ul className="space-y-3 text-secondary-text">
                <li><Link to="/community" className="hover:text-accent-green transition-colors duration-200 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Dashboard
                </Link></li>
                <li><Link to="/members" className="hover:text-accent-green transition-colors duration-200 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Members
                </Link></li>
                <li><Link to="/calendar" className="hover:text-accent-green transition-colors duration-200 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Events
                </Link></li>
                <li><Link to="/blog" className="hover:text-accent-green transition-colors duration-200 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Blog
                </Link></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h3 className="font-semibold text-white mb-6 text-lg">Support</h3>
              <ul className="space-y-3 text-secondary-text">
                <li><a href="mailto:support@curifx.com" className="hover:text-accent-green transition-colors duration-200">Contact Support</a></li>
                <li><a href="#" className="hover:text-accent-green transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="hover:text-accent-green transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent-green transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-secondary-text text-sm">
                &copy; 2024 CuriFX Community Hub. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-secondary-text">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  Live Trading
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-highlight-gold rounded-full"></div>
                  Verified Results
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  Expert Mentors
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
