import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import FeedItem from '../components/FeedItem'
import Leaderboard from '../components/Leaderboard'
import Card from '../components/Card'
import { Calendar, Users, TrendingUp, Plus } from 'lucide-react'
import postsData from '../data/posts.json'
import leaderboardData from '../data/leaderboard.json'
import eventsData from '../data/events.json'

const Community = () => {
  const [posts] = useState(postsData)
  const [leaderboard] = useState(leaderboardData)
  const [events] = useState(eventsData.slice(0, 3))

  return (
    <div className="pt-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_300px] gap-6">
          {/* Left Sidebar */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          {/* Main Feed */}
          <div className="space-y-6">
            {/* Create Post */}
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                  alt="Your avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Share your trading insights with the community..."
                    className="w-full bg-primary-border border border-primary-border rounded-xl px-4 py-3 text-white placeholder-primary-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
                  />
                </div>
                <button className="btn-primary flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Post
                </button>
              </div>
            </Card>

            {/* Feed Items */}
            {posts.map((post) => (
              <FeedItem key={post.id} post={post} />
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <Leaderboard leaderboard={leaderboard} />

            {/* Upcoming Events */}
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-primary-accent" />
                <h3 className="text-lg font-semibold text-white">Upcoming Events</h3>
              </div>

              <div className="space-y-3">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="p-3 bg-primary-bg/30 rounded-xl border border-primary-border hover:border-primary-accent transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-3 h-3 rounded-full mt-1 ${
                        event.type === 'Mentorship' ? 'bg-primary-accent' :
                        event.type === 'Course Drop' ? 'bg-primary-gold' :
                        'bg-blue-500'
                      }`}></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white text-sm truncate">
                          {event.title}
                        </h4>
                        <p className="text-xs text-primary-text-secondary mt-1">
                          {new Date(event.date).toLocaleDateString()} at {event.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="btn-outline w-full mt-4">
                View All Events
              </button>
            </Card>

            {/* Invite Friends */}
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-accent to-primary-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Invite Friends
              </h3>
              <p className="text-sm text-primary-text-secondary mb-4">
                Share ForexPro Community with your trading friends and earn rewards
              </p>
              <button className="btn-primary w-full">
                Invite Now
              </button>
            </Card>

            {/* Quick Stats */}
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-primary-gold" />
                <h3 className="text-lg font-semibold text-white">Community Stats</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Active Today</span>
                  <span className="text-primary-accent font-semibold">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Posts Today</span>
                  <span className="text-primary-gold font-semibold">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">New Members</span>
                  <span className="text-primary-accent font-semibold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Signals Shared</span>
                  <span className="text-primary-gold font-semibold">5</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community
