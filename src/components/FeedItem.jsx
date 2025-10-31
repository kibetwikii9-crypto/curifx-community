import React from 'react'
import { Heart, MessageCircle, Share2, MoreHorizontal, Pin } from 'lucide-react'

const FeedItem = ({ post }) => {
  return (
    <article className="card card-hover p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={post.avatar}
            alt={post.author}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-white">{post.author}</h3>
              {post.pinned && (
                <span className="bg-primary-gold text-primary-bg text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                  <Pin className="w-3 h-3" />
                  Pinned
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-primary-text-secondary">
              <span>{post.role}</span>
              <span>•</span>
              <span>{post.time}</span>
            </div>
          </div>
        </div>
        <button className="text-primary-text-secondary hover:text-primary-text transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
        <p className="text-primary-text-secondary leading-relaxed line-clamp-3">
          {post.body}
        </p>
      </div>

      {/* Tags */}
      {post.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-primary-border text-primary-text-secondary rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Interactions */}
      <div className="flex items-center justify-between pt-4 border-t border-primary-border">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-primary-text-secondary hover:text-primary-accent transition-colors">
            <Heart className="w-4 h-4" />
            <span className="text-sm">{post.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-primary-text-secondary hover:text-primary-accent transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">{post.comments}</span>
          </button>
          <button className="flex items-center gap-2 text-primary-text-secondary hover:text-primary-accent transition-colors">
            <Share2 className="w-4 h-4" />
            <span className="text-sm">{post.shares}</span>
          </button>
        </div>

        {/* Commenter Avatars */}
        {post.commenters && post.commenters.length > 0 && (
          <div className="flex items-center gap-1">
            <div className="flex -space-x-2">
              {post.commenters.slice(0, 4).map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`Commenter ${index + 1}`}
                  className="w-6 h-6 rounded-full border-2 border-primary-card object-cover"
                />
              ))}
              {post.commenters.length > 4 && (
                <div className="w-6 h-6 rounded-full border-2 border-primary-card bg-primary-border flex items-center justify-center">
                  <span className="text-xs text-primary-text-secondary">
                    +{post.commenters.length - 4}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

export default FeedItem
