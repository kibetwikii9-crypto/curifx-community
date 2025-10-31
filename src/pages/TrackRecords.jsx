import React from 'react'
import { TrendingUp, Target, Award, BarChart3, Users, Calendar, DollarSign } from 'lucide-react'

const TrackRecords = () => {
  const performanceStats = [
    {
      title: "Total Profit",
      value: "+247.3%",
      change: "+12.5% this month",
      icon: DollarSign,
      color: "text-accent-green"
    },
    {
      title: "Win Rate",
      value: "89.2%",
      change: "Last 30 days",
      icon: Target,
      color: "text-accent-green"
    },
    {
      title: "Total Trades",
      value: "1,247",
      change: "Since inception",
      icon: BarChart3,
      color: "text-primary-text"
    },
    {
      title: "Active Members",
      value: "2,847",
      change: "Growing community",
      icon: Users,
      color: "text-highlight-gold"
    }
  ]

  const monthlyPerformance = [
    { month: "Jan 2024", profit: "+23.4%", trades: 89, winRate: "91.2%" },
    { month: "Feb 2024", profit: "+18.7%", trades: 76, winRate: "88.1%" },
    { month: "Mar 2024", profit: "+31.2%", trades: 94, winRate: "92.5%" },
    { month: "Apr 2024", profit: "+27.8%", trades: 87, winRate: "89.7%" },
    { month: "May 2024", profit: "+35.1%", trades: 102, winRate: "94.1%" },
    { month: "Jun 2024", profit: "+29.6%", trades: 91, winRate: "90.1%" }
  ]

  const topPerformers = [
    { name: "Alex Chen", profit: "+156.7%", trades: 234, avatar: "AC" },
    { name: "Sarah Johnson", profit: "+142.3%", trades: 198, avatar: "SJ" },
    { name: "Mike Rodriguez", profit: "+138.9%", trades: 187, avatar: "MR" },
    { name: "Emma Wilson", profit: "+134.2%", trades: 201, avatar: "EW" },
    { name: "David Kim", profit: "+129.8%", trades: 176, avatar: "DK" }
  ]

  return (
    <div className="pt-20 min-h-screen bg-primary-bg">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-heading">
            CuriFX Track Records
          </h1>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            Transparent performance metrics showcasing our consistent profitability and community growth
          </p>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {performanceStats.map((stat, index) => (
            <div key={index} className="bg-card-surface p-6 rounded-2xl border border-primary-border hover:border-accent-green/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <div className="text-right">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-secondary-text">{stat.change}</div>
                </div>
              </div>
              <h3 className="text-primary-text font-semibold">{stat.title}</h3>
            </div>
          ))}
        </div>

        {/* Monthly Performance Chart */}
        <div className="bg-card-surface p-8 rounded-2xl border border-primary-border mb-12">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-accent-green" />
            <h2 className="text-2xl font-bold text-white">Monthly Performance</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary-border">
                  <th className="text-left py-4 px-2 text-secondary-text font-semibold">Month</th>
                  <th className="text-right py-4 px-2 text-secondary-text font-semibold">Profit</th>
                  <th className="text-right py-4 px-2 text-secondary-text font-semibold">Trades</th>
                  <th className="text-right py-4 px-2 text-secondary-text font-semibold">Win Rate</th>
                </tr>
              </thead>
              <tbody>
                {monthlyPerformance.map((month, index) => (
                  <tr key={index} className="border-b border-primary-border/50 hover:bg-card-surface/50 transition-colors duration-200">
                    <td className="py-4 px-2 text-primary-text font-medium">{month.month}</td>
                    <td className="py-4 px-2 text-right text-accent-green font-semibold">{month.profit}</td>
                    <td className="py-4 px-2 text-right text-primary-text">{month.trades}</td>
                    <td className="py-4 px-2 text-right text-accent-green font-semibold">{month.winRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-card-surface p-8 rounded-2xl border border-primary-border mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-highlight-gold" />
            <h2 className="text-2xl font-bold text-white">Top Community Performers</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPerformers.map((performer, index) => (
              <div key={index} className="bg-primary-bg p-6 rounded-xl border border-primary-border hover:border-accent-green/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-green to-highlight-gold rounded-full flex items-center justify-center text-white font-bold">
                    {performer.avatar}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{performer.name}</h3>
                    <div className="text-sm text-secondary-text">#{index + 1} Trader</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-secondary-text">Profit:</span>
                    <span className="text-accent-green font-semibold">{performer.profit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-text">Trades:</span>
                    <span className="text-primary-text">{performer.trades}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Badge */}
        <div className="bg-gradient-to-r from-accent-green/10 to-highlight-gold/10 p-8 rounded-2xl border border-accent-green/20 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-accent-green" />
            <h3 className="text-2xl font-bold text-white">Verified Performance</h3>
          </div>
          <p className="text-secondary-text mb-6 max-w-2xl mx-auto">
            All performance data is verified through third-party trading platforms and audited monthly. 
            Our track record speaks for itself with consistent profitability and transparent reporting.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-secondary-text">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-green rounded-full"></div>
              MT4/MT5 Verified
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-green rounded-full"></div>
              Monthly Audits
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-green rounded-full"></div>
              Real Money Trading
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-green rounded-full"></div>
              Live Performance
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackRecords
