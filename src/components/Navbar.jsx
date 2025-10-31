import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, TrendingUp, Star } from 'lucide-react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Track Records', path: '/track-records' },
    { name: 'Courses', path: '/courses' },
    { name: 'Mentorship', path: '/mentorship' },
    { name: 'Community Hub', path: '/community' },
    { name: 'Members', path: '/members' },
    { name: 'Calendar', path: '/calendar' }
  ]

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 backdrop-blur-md bg-black/40 border-b border-primary-border shadow-lg">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-white font-heading font-bold text-xl group" aria-label="CuriFX Home">
          <div className="w-10 h-10 bg-gradient-to-br from-accent-green via-accent-green to-highlight-gold rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(0,200,150,0.3)] transition-all duration-300">
            <TrendingUp className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl">CuriFX</span>
            <span className="text-xs text-secondary-text font-normal">Community Hub</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 relative group ${
                isActive(item.path)
                  ? 'text-accent-green bg-accent-green/10 border border-accent-green/20'
                  : 'text-secondary-text hover:text-primary-text hover:bg-card-surface/50'
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-green rounded-full"></div>
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/community"
            className="px-6 py-2 bg-gradient-to-r from-accent-green to-accent-green/80 text-white font-semibold rounded-xl hover:shadow-[0_0_15px_rgba(0,200,150,0.4)] transition-all duration-300 hover:scale-105"
            role="button"
          >
            Join Community
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-primary-text p-2 rounded-lg hover:bg-card-surface/50 transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="lg:hidden absolute top-20 left-0 right-0 bg-card-surface/95 backdrop-blur-md border-b border-primary-border shadow-xl"
          role="menu"
        >
          <div className="px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                role="menuitem"
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-accent-green bg-accent-green/10 border border-accent-green/20'
                    : 'text-secondary-text hover:text-primary-text hover:bg-card-surface/50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute right-4 w-1 h-1 bg-accent-green rounded-full" aria-hidden="true"></div>
                )}
              </Link>
            ))}
            <div className="pt-4 border-t border-primary-border space-y-2">
              <Link
                to="/community"
                className="block px-4 py-3 bg-gradient-to-r from-accent-green to-accent-green/80 text-white font-semibold rounded-xl text-center hover:shadow-[0_0_15px_rgba(0,200,150,0.4)] transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar