import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({ placeholder = "Search...", value, onChange, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-primary-text-secondary" />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 bg-primary-card border border-primary-border rounded-xl text-white placeholder-primary-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition-all duration-200"
      />
    </div>
  )
}

export default SearchBar
