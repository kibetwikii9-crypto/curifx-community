import React, { useState } from 'react'
import MemberCard from '../components/MemberCard'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'
import { Users, TrendingUp, Filter } from 'lucide-react'
import membersData from '../data/members.json'

const Members = () => {
  const [members] = useState(membersData)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Mentors', 'Top Traders', 'New Members']

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.specialties?.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesFilter = activeFilter === 'All' || 
                         (activeFilter === 'Mentors' && member.badge === 'Mentor') ||
                         (activeFilter === 'Top Traders' && member.badge === 'Top Trader') ||
                         (activeFilter === 'New Members' && member.badge === 'New Member')
    
    return matchesSearch && matchesFilter
  })

  const activeNow = members.slice(0, 8)

  return (
    <div className="pt-24">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-6">Community Members</h1>
          
          {/* Search Bar */}
          <div className="w-full md:w-1/2 mx-auto mb-6">
            <SearchBar
              placeholder="Search members by name, role, or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3 justify-center mb-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-primary-accent text-white'
                    : 'bg-primary-border text-primary-text-secondary hover:bg-primary-border/80 hover:text-primary-text'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Members Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredMembers.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <Card className="p-8 text-center">
                <Users className="w-16 h-16 text-primary-text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Members Found</h3>
                <p className="text-primary-text-secondary">
                  Try adjusting your search terms or filters
                </p>
              </Card>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Active Now */}
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-primary-accent" />
                <h3 className="text-lg font-semibold text-white">Active Now</h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {activeNow.map((member) => (
                  <img
                    key={member.id}
                    src={member.avatar}
                    alt={member.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-primary-accent"
                    title={member.name}
                  />
                ))}
              </div>

              <div className="text-sm text-primary-text-secondary">
                <span className="text-primary-accent font-semibold">{activeNow.length}</span> members online
              </div>
            </Card>

            {/* Monthly Growth */}
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary-gold" />
                <h3 className="text-lg font-semibold text-white">Monthly Growth</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">New Members</span>
                  <span className="text-primary-accent font-semibold">+127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Active Posts</span>
                  <span className="text-primary-gold font-semibold">+89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Engagement</span>
                  <span className="text-primary-accent font-semibold">+23%</span>
                </div>
              </div>

              {/* Simple Sparkline Placeholder */}
              <div className="mt-4 h-16 bg-primary-border rounded-lg flex items-end justify-between px-2 py-2">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-primary-accent rounded-sm"
                    style={{
                      width: '6px',
                      height: `${Math.random() * 40 + 10}px`
                    }}
                  />
                ))}
              </div>
            </Card>

            {/* Member Stats */}
            <Card className="p-4">
              <h3 className="text-lg font-semibold text-white mb-4">Member Breakdown</h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Total Members</span>
                  <span className="text-white font-semibold">2,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Mentors</span>
                  <span className="text-primary-gold font-semibold">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Top Traders</span>
                  <span className="text-primary-accent font-semibold">89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">New This Month</span>
                  <span className="text-primary-accent font-semibold">127</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members
