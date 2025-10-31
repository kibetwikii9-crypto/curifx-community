import React from 'react'
import { Trophy, TrendingUp, TrendingDown } from 'lucide-react'
import Card from './Card'

const Leaderboard = ({ leaderboard }) => {
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-primary-gold" />
      case 2:
        return <Trophy className="w-5 h-5 text-gray-400" />
      case 3:
        return <Trophy className="w-5 h-5 text-amber-600" />
      default:
        return <span className="w-5 h-5 text-center text-sm font-bold text-primary-text-secondary">#{rank}</span>
    }
  }

  const getChangeIcon = (change) => {
    const isPositive = change.startsWith('+')
    return isPositive ? (
      <TrendingUp className="w-4 h-4 text-primary-accent" />
    ) : (
      <TrendingDown className="w-4 h-4 text-red-400" />
    )
  }

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-5 h-5 text-primary-gold" />
        <h3 className="text-lg font-semibold text-white">Leaderboard</h3>
      </div>

      <div className="space-y-3">
        {leaderboard.map((trader) => (
          <div
            key={trader.rank}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
              trader.rank <= 3 
                ? 'bg-primary-bg/30 border border-primary-border' 
                : 'hover:bg-primary-border'
            }`}
          >
            <div className="flex items-center justify-center w-6">
              {getRankIcon(trader.rank)}
            </div>

            <img
              src={trader.avatar}
              alt={trader.name}
              className="w-8 h-8 rounded-full object-cover"
            />

            <div className="flex-1 min-w-0">
              <div className="font-medium text-white text-sm truncate">
                {trader.name}
              </div>
              <div className="text-xs text-primary-text-secondary">
                {trader.role}
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm font-semibold text-primary-accent">
                {trader.profit}
              </div>
              <div className="flex items-center gap-1 text-xs">
                {getChangeIcon(trader.change)}
                <span className="text-primary-text-secondary">{trader.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-primary-border">
        <div className="text-center">
          <div className="text-sm text-primary-text-secondary mb-1">Your Rank</div>
          <div className="text-lg font-bold text-primary-accent">#47</div>
          <div className="text-xs text-primary-text-secondary">+$2,340 this month</div>
        </div>
      </div>
    </Card>
  )
}

export default Leaderboard
