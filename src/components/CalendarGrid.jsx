import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react'
import Card from './Card'

const CalendarGrid = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }
    
    return days
  }

  const getEventsForDay = (day) => {
    if (!day) return []
    const dayEvents = events.filter(event => {
      const eventDate = new Date(event.date)
      return eventDate.getDate() === day && 
             eventDate.getMonth() === currentDate.getMonth() &&
             eventDate.getFullYear() === currentDate.getFullYear()
    })
    return dayEvents.slice(0, 2) // Show max 2 events per day
  }

  const getEventColor = (type) => {
    switch (type) {
      case 'Mentorship':
        return 'bg-primary-accent'
      case 'Course Drop':
        return 'bg-primary-gold'
      case 'Live Trading':
        return 'bg-blue-500'
      default:
        return 'bg-primary-border'
    }
  }

  const navigateMonth = (direction) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + direction)
      return newDate
    })
  }

  const upcomingEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Calendar */}
      <div className="lg:col-span-2">
        <Card className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-2 hover:bg-primary-border rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-primary-text-secondary" />
              </button>
              <button
                onClick={() => navigateMonth(1)}
                className="p-2 hover:bg-primary-border rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-primary-text-secondary" />
              </button>
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-accent rounded-full"></div>
              <span className="text-sm text-primary-text-secondary">Mentorship</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-gold rounded-full"></div>
              <span className="text-sm text-primary-text-secondary">Course Drop</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-primary-text-secondary">Live Trading</span>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Day headers */}
            {dayNames.map(day => (
              <div key={day} className="text-center text-sm font-medium text-primary-text-secondary py-2">
                {day}
              </div>
            ))}
            
            {/* Calendar days */}
            {getDaysInMonth(currentDate).map((day, index) => {
              const dayEvents = getEventsForDay(day)
              const isToday = day === new Date().getDate() && 
                            currentDate.getMonth() === new Date().getMonth() &&
                            currentDate.getFullYear() === new Date().getFullYear()
              
              return (
                <div
                  key={index}
                  className={`aspect-square rounded-xl p-2 flex flex-col items-start justify-start text-primary-text-secondary hover:border hover:border-primary-accent hover:shadow-[0_0_10px_#00C89620] transition-all duration-200 ${
                    isToday ? 'bg-primary-accent/20 border border-primary-accent' : ''
                  }`}
                >
                  {day && (
                    <>
                      <div className="text-xs text-primary-text-secondary self-end">
                        {day}
                      </div>
                      <div className="flex flex-col gap-1 mt-1 w-full">
                        {dayEvents.map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            className={`text-xs px-2 py-1 rounded-full text-white truncate ${getEventColor(event.type)}`}
                            title={event.title}
                          >
                            {event.title}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </Card>
      </div>

      {/* Upcoming Events */}
      <div>
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-primary-accent" />
            <h3 className="text-lg font-semibold text-white">Upcoming Events</h3>
          </div>

          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="p-4 bg-primary-bg/30 rounded-xl border border-primary-border hover:border-primary-accent transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-3 h-3 rounded-full mt-1 ${getEventColor(event.type)}`}></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-white text-sm truncate">
                      {event.title}
                    </h4>
                    <p className="text-xs text-primary-text-secondary mt-1 line-clamp-2">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-primary-text-secondary">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                      <Clock className="w-3 h-3" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="btn-primary w-full mt-4">
            View All Events
          </button>
        </Card>
      </div>
    </div>
  )
}

export default CalendarGrid
