import React, { useState } from 'react'
import MentorCard from '../components/MentorCard'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'
import { UserCheck, Filter, Star, Clock, Users } from 'lucide-react'
import mentorsData from '../data/mentors.json'

const Mentorship = () => {
  const [mentors] = useState(mentorsData)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Available', 'Limited', 'Waitlist']

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesFilter = activeFilter === 'All' || mentor.availability === activeFilter
    
    return matchesSearch && matchesFilter
  })

  const topMentors = mentors.slice(0, 3)

  return (
    <div className="pt-24">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">Expert Mentorship</h1>
          <p className="text-primary-text-secondary">
            Get personalized guidance from professional traders with proven track records
          </p>
        </div>

        {/* Hero Section */}
        <Card className="p-8 mb-8 bg-gradient-to-r from-primary-gold/10 to-primary-accent/10 border-primary-gold/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <UserCheck className="w-6 h-6 text-primary-gold" />
                <span className="text-primary-gold font-semibold">1-on-1 Mentorship</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Accelerate Your Trading Success
              </h2>
              <p className="text-lg text-primary-text-secondary mb-6 leading-relaxed">
                Work directly with experienced traders who have consistently profitable track records. 
                Get personalized feedback, strategy development, and ongoing support to reach your trading goals.
              </p>
              <div className="flex items-center gap-6 mb-6 text-sm text-primary-text-secondary">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-primary-gold" />
                  <span>4.8/5 Average Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>2,500+ Students Mentored</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Flexible Scheduling</span>
                </div>
              </div>
              <button className="btn-primary text-lg px-8 py-3">
                Find Your Mentor
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop"
                alt="Mentorship"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>
        </Card>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="w-full md:w-1/2 mx-auto mb-6">
            <SearchBar
              placeholder="Search mentors by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-3 justify-center mb-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-primary-gold text-primary-bg'
                    : 'bg-primary-border text-primary-text-secondary hover:bg-primary-border/80 hover:text-primary-text'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Mentors Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>

            {filteredMentors.length === 0 && (
              <Card className="p-8 text-center">
                <UserCheck className="w-16 h-16 text-primary-text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Mentors Found</h3>
                <p className="text-primary-text-secondary">
                  Try adjusting your search terms or filters
                </p>
              </Card>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Top Mentors */}
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-primary-gold" />
                <h3 className="text-lg font-semibold text-white">Top Mentors</h3>
              </div>

              <div className="space-y-3">
                {topMentors.map((mentor, index) => (
                  <div
                    key={mentor.id}
                    className="flex items-center gap-3 p-3 bg-primary-bg/30 rounded-xl hover:bg-primary-border transition-colors cursor-pointer"
                  >
                    <img
                      src={mentor.avatar}
                      alt={mentor.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white text-sm truncate">
                        {mentor.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-primary-text-secondary">
                        <Star className="w-3 h-3 text-primary-gold" />
                        <span>{mentor.rating}</span>
                        <span>•</span>
                        <span>{mentor.students} students</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Mentorship Stats */}
            <Card className="p-4">
              <h3 className="text-lg font-semibold text-white mb-4">Mentorship Stats</h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Active Mentors</span>
                  <span className="text-white font-semibold">{mentors.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Total Sessions</span>
                  <span className="text-primary-accent font-semibold">15,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Success Rate</span>
                  <span className="text-primary-gold font-semibold">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Avg Rating</span>
                  <span className="text-primary-gold font-semibold">4.8/5</span>
                </div>
              </div>
            </Card>

            {/* How It Works */}
            <Card className="p-4">
              <h3 className="text-lg font-semibold text-white mb-4">How It Works</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-accent rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">1</span>
                  </div>
                  <span className="text-sm text-primary-text-secondary">Choose Your Mentor</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-border rounded-full flex items-center justify-center">
                    <span className="text-xs text-primary-text-secondary font-bold">2</span>
                  </div>
                  <span className="text-sm text-primary-text-secondary">Book a Session</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-border rounded-full flex items-center justify-center">
                    <span className="text-xs text-primary-text-secondary font-bold">3</span>
                  </div>
                  <span className="text-sm text-primary-text-secondary">Get Personalized Guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-border rounded-full flex items-center justify-center">
                    <span className="text-xs text-primary-text-secondary font-bold">4</span>
                  </div>
                  <span className="text-sm text-primary-text-secondary">Track Your Progress</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mentorship
