import React, { useState } from 'react'
import CourseCard from '../components/CourseCard'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'
import { BookOpen, Filter, Star, Users, Clock } from 'lucide-react'
import coursesData from '../data/courses.json'

const Courses = () => {
  const [courses] = useState(coursesData)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Beginner', 'Intermediate', 'Advanced']

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = activeFilter === 'All' || course.level.includes(activeFilter)
    
    return matchesSearch && matchesFilter
  })

  const featuredCourse = courses[0]
  const topCourses = courses.slice(0, 3)

  return (
    <div className="pt-24">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">Trading Courses</h1>
          <p className="text-primary-text-secondary">
            Master forex trading with our comprehensive course library
          </p>
        </div>

        {/* Featured Course */}
        {featuredCourse && (
          <Card className="p-8 mb-8 bg-gradient-to-r from-primary-accent/10 to-primary-gold/10 border-primary-accent/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-primary-gold" />
                  <span className="text-primary-gold font-semibold">Featured Course</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{featuredCourse.title}</h2>
                <p className="text-lg text-primary-text-secondary mb-6 leading-relaxed">
                  {featuredCourse.description}
                </p>
                <div className="flex items-center gap-6 mb-6 text-sm text-primary-text-secondary">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-primary-gold" />
                    <span>{featuredCourse.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{featuredCourse.members} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredCourse.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-primary-accent">
                    ${featuredCourse.price}
                  </div>
                  <button className="btn-primary text-lg px-8 py-3">
                    Enroll Now
                  </button>
                </div>
              </div>
              <div>
                <img
                  src={featuredCourse.image}
                  alt={featuredCourse.title}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </div>
          </Card>
        )}

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="w-full md:w-1/2 mx-auto mb-6">
            <SearchBar
              placeholder="Search courses by title, instructor, or topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-3 justify-center mb-6">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Courses Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <Card className="p-8 text-center">
                <BookOpen className="w-16 h-16 text-primary-text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Courses Found</h3>
                <p className="text-primary-text-secondary">
                  Try adjusting your search terms or filters
                </p>
              </Card>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Top Courses */}
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-primary-gold" />
                <h3 className="text-lg font-semibold text-white">Top Courses</h3>
              </div>

              <div className="space-y-3">
                {topCourses.map((course, index) => (
                  <div
                    key={course.id}
                    className="flex items-center gap-3 p-3 bg-primary-bg/30 rounded-xl hover:bg-primary-border transition-colors cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-primary-gold text-primary-bg rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white text-sm truncate">
                        {course.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-primary-text-secondary">
                        <Star className="w-3 h-3 text-primary-gold" />
                        <span>{course.rating}</span>
                        <span>•</span>
                        <span>{course.members} students</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Course Stats */}
            <Card className="p-4">
              <h3 className="text-lg font-semibold text-white mb-4">Course Statistics</h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Total Courses</span>
                  <span className="text-white font-semibold">{courses.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Total Students</span>
                  <span className="text-primary-accent font-semibold">
                    {courses.reduce((sum, course) => sum + course.members, 0).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Avg Rating</span>
                  <span className="text-primary-gold font-semibold">
                    {(courses.reduce((sum, course) => sum + course.rating, 0) / courses.length).toFixed(1)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Completion Rate</span>
                  <span className="text-primary-accent font-semibold">87%</span>
                </div>
              </div>
            </Card>

            {/* Learning Path */}
            <Card className="p-4">
              <h3 className="text-lg font-semibold text-white mb-4">Learning Path</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-accent rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">1</span>
                  </div>
                  <span className="text-sm text-primary-text-secondary">Start with Basics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-border rounded-full flex items-center justify-center">
                    <span className="text-xs text-primary-text-secondary font-bold">2</span>
                  </div>
                  <span className="text-sm text-primary-text-secondary">Technical Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-border rounded-full flex items-center justify-center">
                    <span className="text-xs text-primary-text-secondary font-bold">3</span>
                  </div>
                  <span className="text-sm text-primary-text-secondary">Risk Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-border rounded-full flex items-center justify-center">
                    <span className="text-xs text-primary-text-secondary font-bold">4</span>
                  </div>
                  <span className="text-sm text-primary-text-secondary">Advanced Strategies</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
