import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Community from './pages/Community'
import Courses from './pages/Courses'
import Mentorship from './pages/Mentorship'
import Signals from './pages/Signals'
import Blog from './pages/Blog'
import Members from './pages/Members'
import Calendar from './pages/Calendar'
import TrackRecords from './pages/TrackRecords'
import MemberProfile from './pages/MemberProfile'
import CourseDetail from './pages/CourseDetail'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/track-records" element={<TrackRecords />} />
          <Route path="/community" element={<Community />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/signals" element={<Signals />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members/:id" element={<MemberProfile />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
