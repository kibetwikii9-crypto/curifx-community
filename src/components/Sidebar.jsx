import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  BookOpen, 
  Users, 
  Calendar, 
  TrendingUp, 
  FileText, 
  UserCheck,
  Settings,
  HelpCircle
} from 'lucide-react'

const Sidebar = () => {
  const location = useLocation()

  const menuItems = [
    { name: 'Dashboard', path: '/community', icon: Home },
    { name: 'Courses', path: '/courses', icon: BookOpen },
    { name: 'Mentorship', path: '/mentorship', icon: UserCheck },
    { name: 'Signals', path: '/signals', icon: TrendingUp },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Members', path: '/members', icon: Users },
    { name: 'Calendar', path: '/calendar', icon: Calendar },
    { name: 'Settings', path: '/settings', icon: Settings },
    { name: 'Help', path: '/help', icon: HelpCircle }
  ]

  const isActive = (path) => {
    if (path === '/community' && location.pathname === '/community') return true
    if (path !== '/community' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <div className="sticky top-24 w-64 space-y-6">
      {/* Main Menu */}
      <div className="card p-4">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Community Info Card */}
      <div className="card p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-primary-accent to-primary-gold rounded-full mx-auto mb-4 flex items-center justify-center">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">ForexPro Community</h3>
          <p className="text-sm text-primary-text-secondary mb-4">
            Join thousands of traders learning and growing together
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <div className="text-center">
              <div className="text-primary-accent font-semibold">2,847</div>
              <div className="text-primary-text-secondary">Members</div>
            </div>
            <div className="text-center">
              <div className="text-primary-gold font-semibold">156</div>
              <div className="text-primary-text-secondary">Mentors</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="card p-4">
        <h4 className="font-semibold text-white mb-3">Today's Activity</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-primary-text-secondary">New Posts</span>
            <span className="text-primary-accent font-medium">23</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary-text-secondary">Active Traders</span>
            <span className="text-primary-gold font-medium">1,247</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary-text-secondary">Signals Shared</span>
            <span className="text-primary-accent font-medium">8</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
