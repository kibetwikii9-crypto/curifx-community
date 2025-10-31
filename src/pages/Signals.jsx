import React, { useState } from 'react'
import Card from '../components/Card'
import { TrendingUp, Filter, Target, AlertCircle, CheckCircle } from 'lucide-react'

const Signals = () => {
  const [signals] = useState([
    {
      id: 1,
      pair: 'EUR/USD',
      entry: '1.0850',
      tp: '1.0920',
      sl: '1.0800',
      confidence: 'High',
      type: 'Long',
      time: '2 hours ago',
      author: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      status: 'Active'
    },
    {
      id: 2,
      pair: 'GBP/JPY',
      entry: '185.50',
      tp: '187.20',
      sl: '184.80',
      confidence: 'Medium',
      type: 'Long',
      time: '4 hours ago',
      author: 'Elena Volkov',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      status: 'Active'
    },
    {
      id: 3,
      pair: 'AUD/USD',
      entry: '0.6750',
      tp: '0.6680',
      sl: '0.6800',
      confidence: 'High',
      type: 'Short',
      time: '6 hours ago',
      author: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      status: 'Hit TP'
    },
    {
      id: 4,
      pair: 'USD/CAD',
      entry: '1.3650',
      tp: '1.3720',
      sl: '1.3600',
      confidence: 'Medium',
      type: 'Long',
      time: '8 hours ago',
      author: 'Marcus Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      status: 'Active'
    },
    {
      id: 5,
      pair: 'NZD/USD',
      entry: '0.6250',
      tp: '0.6180',
      sl: '0.6300',
      confidence: 'Low',
      type: 'Short',
      time: '12 hours ago',
      author: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      status: 'Hit SL'
    }
  ])

  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Active', 'Hit TP', 'Hit SL']

  const filteredSignals = signals.filter(signal => 
    activeFilter === 'All' || signal.status === activeFilter
  )

  const getConfidenceColor = (confidence) => {
    switch (confidence) {
      case 'High':
        return 'text-primary-accent bg-primary-accent/20'
      case 'Medium':
        return 'text-primary-gold bg-primary-gold/20'
      case 'Low':
        return 'text-red-400 bg-red-400/20'
      default:
        return 'text-primary-text-secondary bg-primary-border'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Hit TP':
        return <CheckCircle className="w-4 h-4 text-primary-accent" />
      case 'Hit SL':
        return <AlertCircle className="w-4 h-4 text-red-400" />
      default:
        return <Target className="w-4 h-4 text-primary-gold" />
    }
  }

  const getTypeColor = (type) => {
    return type === 'Long' ? 'text-primary-accent' : 'text-red-400'
  }

  return (
    <div className="pt-24">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">Trading Signals</h1>
          <p className="text-primary-text-secondary">
            High-quality trading signals from our community of expert traders
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-primary-accent mb-2">47</div>
            <div className="text-primary-text-secondary">Active Signals</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-primary-gold mb-2">78%</div>
            <div className="text-primary-text-secondary">Success Rate</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-primary-accent mb-2">156</div>
            <div className="text-primary-text-secondary">Signals This Month</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-primary-gold mb-2">2.4</div>
            <div className="text-primary-text-secondary">Avg Risk/Reward</div>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex gap-3 justify-center mb-8">
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

        {/* Signals Table */}
        <Card className="p-6">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary-border">
                  <th className="text-left py-3 px-4 text-primary-text-secondary font-medium">Pair</th>
                  <th className="text-left py-3 px-4 text-primary-text-secondary font-medium">Type</th>
                  <th className="text-left py-3 px-4 text-primary-text-secondary font-medium">Entry</th>
                  <th className="text-left py-3 px-4 text-primary-text-secondary font-medium">Take Profit</th>
                  <th className="text-left py-3 px-4 text-primary-text-secondary font-medium">Stop Loss</th>
                  <th className="text-left py-3 px-4 text-primary-text-secondary font-medium">Confidence</th>
                  <th className="text-left py-3 px-4 text-primary-text-secondary font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-primary-text-secondary font-medium">Author</th>
                </tr>
              </thead>
              <tbody>
                {filteredSignals.map((signal) => (
                  <tr key={signal.id} className="border-b border-primary-border/50 hover:bg-primary-border/30 transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-white">{signal.pair}</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`font-medium ${getTypeColor(signal.type)}`}>
                        {signal.type}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-white font-medium">{signal.entry}</td>
                    <td className="py-4 px-4 text-primary-accent font-medium">{signal.tp}</td>
                    <td className="py-4 px-4 text-red-400 font-medium">{signal.sl}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(signal.confidence)}`}>
                        {signal.confidence}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(signal.status)}
                        <span className="text-sm">{signal.status}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={signal.avatar}
                          alt={signal.author}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="text-sm text-white">{signal.author}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {filteredSignals.map((signal) => (
              <Card key={signal.id} className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{signal.pair}</h3>
                    <span className={`font-medium ${getTypeColor(signal.type)}`}>
                      {signal.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(signal.status)}
                    <span className="text-sm">{signal.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div>
                    <div className="text-xs text-primary-text-secondary mb-1">Entry</div>
                    <div className="text-white font-medium">{signal.entry}</div>
                  </div>
                  <div>
                    <div className="text-xs text-primary-text-secondary mb-1">TP</div>
                    <div className="text-primary-accent font-medium">{signal.tp}</div>
                  </div>
                  <div>
                    <div className="text-xs text-primary-text-secondary mb-1">SL</div>
                    <div className="text-red-400 font-medium">{signal.sl}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(signal.confidence)}`}>
                    {signal.confidence} Confidence
                  </span>
                  <div className="flex items-center gap-2">
                    <img
                      src={signal.avatar}
                      alt={signal.author}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-sm text-white">{signal.author}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredSignals.length === 0 && (
            <div className="text-center py-12">
              <TrendingUp className="w-16 h-16 text-primary-text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Signals Found</h3>
              <p className="text-primary-text-secondary">
                Try adjusting your filters
              </p>
            </div>
          )}
        </Card>

        {/* Disclaimer */}
        <Card className="p-6 mt-8 bg-primary-bg/50 border-primary-border">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary-gold mt-0.5" />
            <div>
              <h3 className="font-semibold text-white mb-2">Risk Disclaimer</h3>
              <p className="text-sm text-primary-text-secondary leading-relaxed">
                Trading signals are provided for educational purposes only. Past performance does not guarantee future results. 
                Always conduct your own analysis and risk management before entering any trade. Never risk more than you can afford to lose.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Signals
