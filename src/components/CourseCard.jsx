import React from 'react'
import { Star, Users, Clock, Play } from 'lucide-react'
import Card from './Card'

const CourseCard = ({ course }) => {
  return (
    <Card hover className="p-6">
      <div className="relative mb-4">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover rounded-xl"
        />
        <div className="absolute top-3 right-3 bg-primary-accent text-white text-xs px-2 py-1 rounded-full font-medium">
          {course.level}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-primary-text-secondary text-sm line-clamp-2">
          {course.excerpt}
        </p>

        <div className="flex items-center gap-4 text-sm text-primary-text-secondary">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-primary-gold" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.members}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3">
          <div className="text-2xl font-bold text-primary-accent">
            ${course.price}
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Play className="w-4 h-4" />
            Enroll
          </button>
        </div>
      </div>
    </Card>
  )
}

export default CourseCard
