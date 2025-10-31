import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import { 
  Calendar, 
  User, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2,
  BookOpen,
  ArrowLeft,
  Tag
} from 'lucide-react'

const BlogPost = () => {
  const { id } = useParams()
  
  // Mock blog post data
  const blogPost = {
    id: parseInt(id),
    title: "Mastering Risk Management: The Key to Consistent Profits",
    excerpt: "Learn the essential risk management techniques that separate profitable traders from the rest.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
    category: "Risk Management",
    author: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    date: "2024-01-15",
    readTime: "8 min read",
    views: 1247,
    likes: 89,
    comments: 23,
    content: `
      <p>Risk management is the cornerstone of successful trading. Without proper risk management, even the most skilled traders can lose their entire account in a matter of days. In this comprehensive guide, we'll explore the essential risk management techniques that separate profitable traders from the rest.</p>

      <h2>Understanding Risk Management</h2>
      <p>Risk management in trading refers to the process of identifying, analyzing, and taking steps to reduce or eliminate exposures to loss. It's about protecting your capital while maximizing your profit potential.</p>

      <h2>Key Principles of Risk Management</h2>
      <h3>1. Position Sizing</h3>
      <p>Position sizing is perhaps the most important aspect of risk management. Never risk more than 2% of your account balance on a single trade. This means if you have a $10,000 account, your maximum risk per trade should be $200.</p>

      <h3>2. Stop Losses</h3>
      <p>Always use stop losses. A stop loss is an order placed with a broker to buy or sell a security when it reaches a certain price. It's designed to limit an investor's loss on a position.</p>

      <h3>3. Risk/Reward Ratio</h3>
      <p>Aim for a minimum risk/reward ratio of 1:2. This means for every dollar you risk, you should aim to make at least two dollars in profit.</p>

      <h3>4. Diversification</h3>
      <p>Don't put all your eggs in one basket. Diversify your trades across different currency pairs and timeframes to reduce overall risk.</p>

      <h2>Common Risk Management Mistakes</h2>
      <p>Many traders make these common mistakes:</p>
      <ul>
        <li>Risking too much per trade</li>
        <li>Not using stop losses</li>
        <li>Overtrading</li>
        <li>Revenge trading</li>
        <li>Ignoring market conditions</li>
      </ul>

      <h2>Building Your Risk Management Plan</h2>
      <p>Create a written risk management plan that includes:</p>
      <ol>
        <li>Maximum risk per trade (2% rule)</li>
        <li>Maximum daily loss limit</li>
        <li>Maximum weekly loss limit</li>
        <li>Position sizing rules</li>
        <li>Stop loss placement rules</li>
        <li>Take profit targets</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Risk management is not optional in trading - it's essential. By following these principles and creating a solid risk management plan, you'll protect your capital and increase your chances of long-term success in the forex market.</p>
    `
  }

  const relatedPosts = [
    {
      id: 2,
      title: "Technical Analysis Fundamentals: Chart Patterns That Work",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      category: "Technical Analysis",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Trading Psychology: Overcoming Fear and Greed",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      category: "Psychology",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Fundamental Analysis: Understanding Economic Indicators",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      category: "Fundamental Analysis",
      readTime: "10 min read"
    }
  ]

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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Back Button */}
            <button className="flex items-center gap-2 text-primary-text-secondary hover:text-primary-text transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>

            {/* Article Header */}
            <Card className="p-8 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs px-2 py-1 rounded-full text-white ${getCategoryColor(blogPost.category)}`}>
                  {blogPost.category}
                </span>
                <span className="text-primary-text-secondary text-sm">{blogPost.readTime}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
                {blogPost.title}
              </h1>
              
              <div className="flex items-center gap-6 mb-6 text-sm text-primary-text-secondary">
                <div className="flex items-center gap-2">
                  <img
                    src={blogPost.avatar}
                    alt={blogPost.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{blogPost.views} views</span>
                </div>
              </div>

              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />

              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-primary-text-secondary hover:text-primary-accent transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>{blogPost.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-primary-text-secondary hover:text-primary-accent transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>{blogPost.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-primary-text-secondary hover:text-primary-accent transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </Card>

            {/* Article Content */}
            <Card className="p-8">
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                style={{
                  color: '#E5E5E5',
                  lineHeight: '1.7'
                }}
              />
            </Card>

            {/* Tags */}
            <Card className="p-6 mt-6">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-primary-accent" />
                <h3 className="text-lg font-semibold text-white">Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Risk Management', 'Trading', 'Forex', 'Education', 'Strategy'].map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-primary-border text-primary-text-secondary rounded-full hover:bg-primary-accent hover:text-white transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author Info */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">About the Author</h3>
              <div className="text-center">
                <img
                  src={blogPost.avatar}
                  alt={blogPost.author}
                  className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                />
                <h4 className="font-semibold text-white mb-2">{blogPost.author}</h4>
                <p className="text-sm text-primary-text-secondary mb-4">
                  Senior Trader & Risk Management Expert
                </p>
                <p className="text-sm text-primary-text-secondary leading-relaxed">
                  Professional forex trader with 8 years of experience. Specializes in risk management and technical analysis.
                </p>
                <button className="btn-outline w-full mt-4">
                  Follow Author
                </button>
              </div>
            </Card>

            {/* Related Posts */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center gap-3 p-3 bg-primary-bg/30 rounded-xl hover:bg-primary-border transition-colors cursor-pointer"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white text-sm line-clamp-2 mb-1">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-primary-text-secondary">
                        <span className={`px-2 py-1 rounded-full text-white ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Newsletter */}
            <Card className="p-6 bg-gradient-to-r from-primary-gold/10 to-primary-accent/10 border-primary-gold/30">
              <div className="text-center">
                <BookOpen className="w-8 h-8 text-primary-gold mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Stay Updated</h3>
                <p className="text-sm text-primary-text-secondary mb-4">
                  Get the latest trading insights delivered to your inbox
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-primary-card border border-primary-border rounded-lg px-3 py-2 text-white placeholder-primary-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent text-sm"
                  />
                  <button className="btn-primary w-full text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
