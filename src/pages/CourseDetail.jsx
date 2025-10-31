import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import { 
  Play, 
  Star, 
  Users, 
  Clock, 
  CheckCircle, 
  BookOpen,
  Download,
  Share2,
  Heart
} from 'lucide-react'
import coursesData from '../data/courses.json'

const CourseDetail = () => {
  const { id } = useParams()
  const course = coursesData.find(c => c.id === parseInt(id))

  if (!course) {
    return (
      <div className="pt-24">
        <div className="max-w-[1440px] mx-auto px-8">
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-semibold text-white mb-4">Course Not Found</h1>
            <p className="text-primary-text-secondary">The course you're looking for doesn't exist.</p>
          </Card>
        </div>
      </div>
    )
  }

  const modules = [
    { id: 1, title: "Introduction to Forex Trading", duration: "45 min", completed: true },
    { id: 2, title: "Understanding Currency Pairs", duration: "60 min", completed: true },
    { id: 3, title: "Technical Analysis Basics", duration: "90 min", completed: false },
    { id: 4, title: "Chart Patterns and Indicators", duration: "75 min", completed: false },
    { id: 5, title: "Risk Management Strategies", duration: "60 min", completed: false },
    { id: 6, title: "Trading Psychology", duration: "45 min", completed: false },
    { id: 7, title: "Live Trading Examples", duration: "120 min", completed: false },
    { id: 8, title: "Course Summary and Next Steps", duration: "30 min", completed: false }
  ]

  const reviews = [
    {
      id: 1,
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      rating: 5,
      comment: "Excellent course! The instructor explains complex concepts in a simple way. Highly recommended for beginners.",
      date: "2024-01-10"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      rating: 5,
      comment: "Great content and practical examples. The risk management section was particularly valuable.",
      date: "2024-01-08"
    },
    {
      id: 3,
      name: "Elena Volkov",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      rating: 4,
      comment: "Good course overall. Could use more advanced strategies, but perfect for beginners.",
      date: "2024-01-05"
    }
  ]

  return (
    <div className="pt-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Course Header */}
            <Card className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-primary-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                      {course.level}
                    </span>
                    <span className="text-primary-text-secondary text-sm">{course.duration}</span>
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-4">{course.title}</h1>
                  <p className="text-lg text-primary-text-secondary mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-6 mb-6 text-sm text-primary-text-secondary">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary-gold" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.members} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-primary-accent">
                      ${course.price}
                    </div>
                    <button className="btn-primary text-lg px-8 py-3 flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      Enroll Now
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </Card>

            {/* Course Modules */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Course Curriculum</h2>
              <div className="space-y-3">
                {modules.map((module) => (
                  <div
                    key={module.id}
                    className="flex items-center justify-between p-4 bg-primary-bg/30 rounded-xl border border-primary-border hover:border-primary-accent transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        module.completed ? 'bg-primary-accent' : 'bg-primary-border'
                      }`}>
                        {module.completed ? (
                          <CheckCircle className="w-4 h-4 text-white" />
                        ) : (
                          <span className="text-xs text-primary-text-secondary font-bold">
                            {module.id}
                          </span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{module.title}</h3>
                        <p className="text-sm text-primary-text-secondary">{module.duration}</p>
                      </div>
                    </div>
                    <button className="btn-outline">
                      {module.completed ? 'Review' : 'Start'}
                    </button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Reviews */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Student Reviews</h2>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="p-4 bg-primary-bg/30 rounded-xl border border-primary-border">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-white">{review.name}</h4>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? 'text-primary-gold fill-current' : 'text-primary-border'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-primary-text-secondary">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-primary-text-secondary">{review.comment}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Course Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Instructor</span>
                  <span className="text-white font-medium">{course.instructor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Level</span>
                  <span className="text-white font-medium">{course.level}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Duration</span>
                  <span className="text-white font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Students</span>
                  <span className="text-white font-medium">{course.members}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-text-secondary">Rating</span>
                  <span className="text-primary-gold font-medium">{course.rating}/5</span>
                </div>
              </div>
            </Card>

            {/* Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Actions</h3>
              <div className="space-y-3">
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  Start Learning
                </button>
                <button className="btn-outline w-full flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Materials
                </button>
                <button className="btn-outline w-full flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Course
                </button>
                <button className="btn-outline w-full flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4" />
                  Add to Favorites
                </button>
              </div>
            </Card>

            {/* Related Courses */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Related Courses</h3>
              <div className="space-y-3">
                {coursesData.slice(0, 3).map((relatedCourse) => (
                  <div
                    key={relatedCourse.id}
                    className="flex items-center gap-3 p-3 bg-primary-bg/30 rounded-xl hover:bg-primary-border transition-colors cursor-pointer"
                  >
                    <img
                      src={relatedCourse.image}
                      alt={relatedCourse.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white text-sm truncate">
                        {relatedCourse.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-primary-text-secondary">
                        <Star className="w-3 h-3 text-primary-gold" />
                        <span>{relatedCourse.rating}</span>
                        <span>•</span>
                        <span>${relatedCourse.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
