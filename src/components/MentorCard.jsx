import React from 'react'
import { Star, Clock, Users, Calendar } from 'lucide-react'
import Card from './Card'

const MentorCard = ({ mentor }) => {
  return (
    <Card hover className="p-6">
      <div className="text-center mb-4">
        <img
          src={mentor.avatar}
          alt={mentor.name}
          className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
        />
        <h3 className="text-lg font-semibold text-white">{mentor.name}</h3>
        <p className="text-primary-text-secondary text-sm">{mentor.role}</p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-center gap-1">
          <Star className="w-4 h-4 text-primary-gold" />
          <span className="text-primary-gold font-semibold">{mentor.rating}</span>
          <span className="text-primary-text-secondary text-sm">({mentor.students} students)</span>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-primary-gold">${mentor.price}</div>
          <div className="text-sm text-primary-text-secondary">per session</div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-primary-text-secondary">
            <Clock className="w-4 h-4" />
            <span>{mentor.experience} experience</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-primary-text-secondary">
            <Users className="w-4 h-4" />
            <span>{mentor.students} students</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-white text-sm">Specialties:</h4>
          <div className="flex flex-wrap gap-1">
            {mentor.specialties.map((specialty, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-primary-border text-primary-text-secondary rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-3">
          <div className={`text-sm font-medium mb-2 ${
            mentor.availability === 'Available' 
              ? 'text-primary-accent' 
              : mentor.availability === 'Limited'
              ? 'text-primary-gold'
              : 'text-primary-text-secondary'
          }`}>
            {mentor.availability}
          </div>
          <button className="btn-secondary w-full">
            Book Session
          </button>
        </div>
      </div>
    </Card>
  )
}

export default MentorCard
