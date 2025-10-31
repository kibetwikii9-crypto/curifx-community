import React from 'react'
import { Users, MessageSquare, Trophy } from 'lucide-react'
import Card from './Card'

const MemberCard = ({ member }) => {
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

  return (
    <Card hover className="p-6">
      <div className="text-center">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
        />
        
        <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
        
        <span className={`text-xs px-3 py-1 rounded-full font-medium ${getBadgeColor(member.badge)}`}>
          {member.badge}
        </span>

        <div className="flex justify-center gap-6 mt-4 text-sm text-primary-text-secondary">
          <div className="text-center">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span className="font-medium">{member.followers}</span>
            </div>
            <div className="text-xs">Followers</div>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              <span className="font-medium">{member.posts}</span>
            </div>
            <div className="text-xs">Posts</div>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              <span className="font-medium">#{member.rank}</span>
            </div>
            <div className="text-xs">Rank</div>
          </div>
        </div>

        <button className="btn-outline w-full mt-4">
          View Profile
        </button>
      </div>
    </Card>
  )
}

export default MemberCard
