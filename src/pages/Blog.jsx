import React, { useState } from 'react'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import { FileText, Filter, Calendar, User, Eye } from 'lucide-react'

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Mastering Risk Management: The Key to Consistent Profits",
      excerpt: "Learn the essential risk management techniques that separate profitable traders from the rest. Discover position sizing, stop losses, and portfolio management strategies.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      category: "Risk Management",
      author: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      date: "2024-01-15",
      readTime: "8 min read",
      views: 1247,
      featured: true
    },
    {
      id: 2,
      title: "Technical Analysis Fundamentals: Chart Patterns That Work",
      excerpt: "Explore the most reliable chart patterns used by professional traders. From head and shoulders to triangles, learn to identify high-probability setups.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Technical Analysis",
      author: "Marcus Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      date: "2024-01-12",
      readTime: "12 min read",
      views: 892,
      featured: false
    },
    {
      id: 3,
      title: "Trading Psychology: Overcoming Fear and Greed",
      excerpt: "The mental game of trading is often more important than technical skills. Learn how to control emotions and develop the mindset of successful traders.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      category: "Psychology",
      author: "Lisa Thompson",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      date: "2024-01-10",
      readTime: "6 min read",
      views: 654,
      featured: false
    },
    {
      id: 4,
      title: "Fundamental Analysis: Understanding Economic Indicators",
      excerpt: "Master the art of fundamental analysis by learning how economic data and central bank policies drive currency movements in the forex market.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Fundamental Analysis",
      author: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      date: "2024-01-08",
      readTime: "10 min read",
      views: 523,
      featured: false
    },
    {
      id: 5,
      title: "Scalping Strategies: Making Profits in Minutes",
      excerpt: "Discover high-frequency trading techniques used by professional scalpers. Learn entry and exit strategies for quick profits in volatile markets.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop",
      category: "Trading Strategies",
      author: "Elena Volkov",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      date: "2024-01-05",
      readTime: "7 min read",
      views: 387,
      featured: false
    },
    {
      id: 6,
      title: "Building Your Trading Plan: A Step-by-Step Guide",
      excerpt: "Create a comprehensive trading plan that includes your goals, risk tolerance, and specific strategies. A well-defined plan is essential for long-term success.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      category: "Trading Plan",
      author: "David Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      date: "2024-01-03",
      readTime: "9 min read",
      views: 456,
      featured: false
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = ['All', 'Risk Management', 'Technical Analysis', 'Psychology', 'Fundamental Analysis', 'Trading Strategies', 'Trading Plan']

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = activeFilter === 'All' || post.category === activeFilter
    
    return matchesSearch && matchesFilter
  })

  const featuredPost = posts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const getCategoryColor = (category) => {
    const colors = {
      'Risk Management': 'bg-primary-accent',
      'Technical Analysis': 'bg-primary-gold',
      'Psychology': 'bg-purple-500',
      'Fundamental Analysis': 'bg-blue-500',
      'Trading Strategies': 'bg-green-500',
      'Trading Plan': 'bg-orange-500'
    }
    return colors[category] || 'bg-primary-border'
  }

  return (
    <div className="pt-24">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">Trading Blog</h1>
          <p className="text-primary-text-secondary">
            Expert insights, strategies, and educational content from our community
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Card className="p-8 mb-8 bg-gradient-to-r from-primary-accent/10 to-primary-gold/10 border-primary-accent/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-primary-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                    Featured
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full text-white ${getCategoryColor(featuredPost.category)}`}>
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                <p className="text-lg text-primary-text-secondary mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 mb-6 text-sm text-primary-text-secondary">
                  <div className="flex items-center gap-2">
                    <img
                      src={featuredPost.avatar}
                      alt={featuredPost.author}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{featuredPost.views} views</span>
                  </div>
                </div>
                <button className="btn-primary text-lg px-8 py-3">
                  Read Article
                </button>
              </div>
              <div>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
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
              placeholder="Search articles by title, category, or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-primary-accent text-white'
                    : 'bg-primary-border text-primary-text-secondary hover:bg-primary-border/80 hover:text-primary-text'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Card key={post.id} hover className="p-6">
              <div className="relative mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs px-2 py-1 rounded-full text-white ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-primary-text-secondary text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-sm text-primary-text-secondary">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center gap-4 text-sm text-primary-text-secondary">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="btn-outline">
                    Read More
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {regularPosts.length === 0 && (
          <Card className="p-8 text-center">
            <FileText className="w-16 h-16 text-primary-text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No Articles Found</h3>
            <p className="text-primary-text-secondary">
              Try adjusting your search terms or filters
            </p>
          </Card>
        )}

        {/* Newsletter Signup */}
        <Card className="p-8 mt-12 bg-gradient-to-r from-primary-gold/10 to-primary-accent/10 border-primary-gold/30">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Articles
            </h2>
            <p className="text-primary-text-secondary mb-6 max-w-2xl mx-auto">
              Get the latest trading insights, strategies, and market analysis delivered to your inbox. 
              Join thousands of traders who rely on our educational content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-primary-card border border-primary-border rounded-xl px-4 py-3 text-white placeholder-primary-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent"
              />
              <button className="btn-primary px-8 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Blog
