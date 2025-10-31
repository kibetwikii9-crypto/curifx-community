# ForexPro Community

A complete, production-quality frontend web app for a Forex trading community built with React, Vite, and Tailwind CSS.

## Features

- **Modern Design**: Dark theme with green and gold accents
- **Responsive Layout**: Mobile-first design that works on all devices
- **Community Dashboard**: Feed with posts, interactions, and real-time updates
- **Course Library**: Comprehensive trading courses with progress tracking
- **Expert Mentorship**: 1-on-1 sessions with professional traders
- **Trading Signals**: High-quality signals from community experts
- **Member Directory**: Search and connect with other traders
- **Event Calendar**: Live trading sessions and educational events
- **Blog**: Educational content and trading insights

## Tech Stack

- **React 18** with functional components and hooks
- **Vite** for fast development and building
- **Tailwind CSS** for styling with custom design system
- **React Router** for client-side routing
- **Lucide React** for consistent iconography

## Design System

### Colors
- Primary Background: `#0A0F1C`
- Card/Surface: `#111827`
- Accent Green: `#00C896`
- Highlight Gold: `#D4AF37`
- Text Primary: `#E5E5E5`
- Text Secondary: `#9CA3AF`
- Border: `#1F2937`

### Typography
- Headings: Poppins (600-700)
- Body: Inter (400-500)

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd forexpro-community
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with mobile menu
│   ├── Sidebar.jsx     # Community sidebar with menu
│   ├── FeedItem.jsx    # Individual post component
│   ├── Card.jsx        # Generic card wrapper
│   ├── CourseCard.jsx  # Course display card
│   ├── MentorCard.jsx  # Mentor profile card
│   ├── MemberCard.jsx  # Member profile card
│   ├── Leaderboard.jsx # Trading leaderboard
│   ├── SearchBar.jsx   # Search input component
│   └── CalendarGrid.jsx # Calendar with events
├── pages/              # Page components
│   ├── Landing.jsx     # Homepage
│   ├── Community.jsx   # Dashboard feed
│   ├── Courses.jsx     # Course library
│   ├── Mentorship.jsx  # Mentor directory
│   ├── Signals.jsx     # Trading signals
│   ├── Blog.jsx        # Blog listing
│   ├── Members.jsx     # Member directory
│   ├── Calendar.jsx    # Event calendar
│   ├── MemberProfile.jsx # Individual member page
│   ├── CourseDetail.jsx  # Individual course page
│   └── BlogPost.jsx    # Individual blog post
├── data/               # Mock data files
│   ├── posts.json      # Community posts
│   ├── courses.json    # Course catalog
│   ├── mentors.json    # Mentor profiles
│   ├── members.json    # Member profiles
│   ├── leaderboard.json # Trading rankings
│   └── events.json     # Calendar events
├── App.jsx             # Main app with routing
├── main.jsx           # React entry point
└── index.css          # Global styles and Tailwind
```

## Routes

- `/` - Landing page
- `/community` - Community dashboard
- `/courses` - Course library
- `/courses/:id` - Individual course
- `/mentorship` - Mentor directory
- `/signals` - Trading signals
- `/blog` - Blog listing
- `/blog/:id` - Individual blog post
- `/members` - Member directory
- `/members/:id` - Individual member profile
- `/calendar` - Event calendar

## Key Features

### Responsive Design
- Mobile-first approach
- Collapsible sidebar on mobile
- Adaptive grid layouts
- Touch-friendly interactions

### Component Architecture
- Reusable components with consistent props
- Custom hooks for state management
- Proper component composition
- Accessibility features (ARIA labels, semantic HTML)

### Data Management
- Mock JSON data for development
- Structured data models
- Easy to replace with real API calls

### Styling
- Tailwind CSS with custom configuration
- Consistent design tokens
- Hover and focus states
- Smooth transitions and animations

## Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  primary: {
    bg: '#0A0F1C',
    card: '#111827',
    accent: '#00C896',
    gold: '#D4AF37',
    // ... other colors
  }
}
```

### Fonts
Update font imports in `index.html` and configure in `tailwind.config.js`.

### Components
All components are modular and can be easily customized or extended.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For questions or support, please open an issue in the repository.
