import React from 'react'
import CalendarGrid from '../components/CalendarGrid'
import eventsData from '../data/events.json'

const Calendar = () => {
  return (
    <div className="pt-24">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">Community Calendar</h1>
          <p className="text-primary-text-secondary">
            Stay updated with live trading sessions, course launches, and mentorship events
          </p>
        </div>

        {/* Calendar Grid */}
        <CalendarGrid events={eventsData} />
      </div>
    </div>
  )
}

export default Calendar
