import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import { 
  Users, 
  MessageSquare, 
  Trophy, 
  TrendingUp, 
  Calendar, 
  MapPin,
  Star,
  Award,
  Target,
  BarChart3
} from 'lucide-react'
import membersData from '../data/members.json'

const MemberProfile = () => {
  const { id } = useParams()
  const member = membersData.find(m => m.id === parseInt(id))

  if (!member) {
    return (
      <div className="pt-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-semibold text-white mb-4">Member Not Found</h1>
            <p className="text-primary-text-secondary">The member you're looking for doesn't exist.</p>
          </Card>
        </div>
      </div>
    )
  }

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Mentor':
        return 'bg-primary-gold text-primary-bg'
      case 'Top Trader':
        return 'bg-primary-accent text-white'
      case 'New Member':
        return 'bg-primary-border text-primary-text'
      default:
        return 'bg-primary-border text-primary-text-secondary'
    }
  }

  const recentPosts = [
    {
      id: 1,
      title: "EUR/USD Analysis: Bullish Momentum Building",
      excerpt: "After analyzing the recent price action and fundamental factors...",
      time: "2 hours ago",
      likes: 47,
      comments: 12
    },
    {
      id: 2,
      title: "Risk Management Strategies That Work",
      excerpt: "I've been trading for over 15 years, and I can tell you...",
      time: "1 day ago",
      likes: 89,
      comments: 23
    },
    {
      id: 3,
      title: "Weekly Market Recap: Central Bank Decisions",
      excerpt: "This week was dominated by central bank decisions...",
      time: "3 days ago",
      likes: 56,
      comments: 18
    }
  ]

  const achievements = [
    { name: "Top 1% Trader", icon: Trophy, color: "text-primary-gold" },
    { name: "Mentor of the Year 2023", icon: Award, color: "text-primary-accent" },
    { name: "1000+ Successful Students", icon: Users, color: "text-blue-400" },
    { name: "Consistent Profits", icon: TrendingUp, color: "text-green-400" }
  ]

  return (
    <div className="pt-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 text-center">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              
              <h1 className="text-2xl font-bold text-white mb-2">{member.name}</h1>
              <p className="text-primary-text-secondary mb-3">{member.role}</p>
              
              <span className={`text-sm px-3 py-1 rounded-full font-medium ${getBadgeColor(member.badge)}`}>
                {member.badge}
              </span>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Followers</span>
                  <span className="text-white font-semibold">{member.followers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Posts</span>
                  <span className="text-white font-semibold">{member.posts}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Rank</span>
                  <span className="text-primary-accent font-semibold">#{member.rank}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Member Since</span>
                  <span className="text-white font-semibold">
                    {new Date(member.joinDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button className="btn-primary w-full">
                  Follow
                </button>
                <button className="btn-outline w-full">
                  Message
                </button>
              </div>
            </Card>

            {/* Bio */}
            <Card className="p-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">About</h3>
              <p className="text-primary-text-secondary leading-relaxed">
                {member.bio}
              </p>
            </Card>

            {/* Specialties */}
            <Card className="p-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-primary-border text-primary-text-secondary rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${achievement.color}`} />
                      <span className="text-primary-text-secondary">{achievement.name}</span>
                    </div>
                  )
                })}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Posts */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Recent Posts</h2>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="p-4 bg-primary-bg/30 rounded-xl border border-primary-border hover:border-primary-accent transition-colors cursor-pointer">
                    <h3 className="font-semibold text-white mb-2">{post.title}</h3>
                    <p className="text-primary-text-secondary text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-primary-text-secondary">
                      <span>{post.time}</span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Trading Stats */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Trading Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-accent mb-2">78%</div>
                  <div className="text-primary-text-secondary text-sm">Win Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-gold mb-2">2.4</div>
                  <div className="text-primary-text-secondary text-sm">Risk/Reward</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-accent mb-2">156</div>
                  <div className="text-primary-text-secondary text-sm">Total Trades</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-gold mb-2">$47K</div>
                  <div className="text-primary-text-secondary text-sm">Profit</div>
                </div>
              </div>
            </Card>

            {/* Performance Chart Placeholder */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Performance Chart</h2>
              <div className="h-64 bg-primary-border rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-primary-text-secondary mx-auto mb-2" />
                  <p className="text-primary-text-secondary">Performance chart would be displayed here</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberProfile
