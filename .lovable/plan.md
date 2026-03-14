

# Premium Business Website — Implementation Plan

## Design System
- **Colors**: Primary Blue (#0A66C2), Sky Blue accents, white/navy backgrounds
- **Typography**: Inter font with bold headings, clean body text, proper spacing
- **Theme**: Dark/Light mode toggle with smooth transition
- **Style**: Glassmorphism cards, soft shadows, rounded corners (12-16px)

## Layout & Navigation
- **Sticky Header**: Logo (SVG) on left, nav links (Home, About, Services, Career, Contact) on right, dark mode toggle, "Get Started" CTA button
- **Mobile**: Animated hamburger menu with slide-in drawer
- **Footer**: Dark background with logo, description, quick links, social icons, copyright

## Pages

### 1. Home
- Hero section with bold heading, tagline, two CTA buttons, animated gradient background with floating shapes
- Stats counter section (clients, projects, experience)
- Featured services preview cards
- Testimonials carousel
- CTA banner

### 2. About
- Company story with image
- Mission & Vision cards with icons
- Team member profile cards with hover flip/overlay effects
- Company values section

### 3. Services
- Card grid layout with icons, hover elevation + shadow animation
- Each card: icon, title, description, "Learn More" link
- Services include: Web Development, Mobile Apps, Cloud Solutions, AI/ML, Cybersecurity, Consulting

### 4. Career
- Open positions listing with cards (role, department, location, type)
- "Apply Now" button per listing
- Application form dialog (name, email, resume upload, cover letter)
- Perks/benefits section

### 5. Contact
- Two-column layout: form (name, email, subject, message) + contact info
- Google Maps placeholder
- Social media icon links
- Form validation with clean error/success states

## Animations & Motion
- Intersection Observer-based fade-in-up on scroll for all sections
- Smooth page transitions between routes
- Hero floating shapes with CSS keyframe animations
- Button hover glow/ripple effects
- Card hover: subtle lift + shadow expansion (0.3s ease)
- Navbar background blur on scroll
- Staggered animations for card grids
- Counter number animation on the stats section

## Technical Approach
- Reusable components: SectionHeading, AnimatedCard, ScrollReveal wrapper
- Dark/Light mode via next-themes
- Framer Motion-style CSS animations (pure CSS + intersection observer)
- Fully responsive with Tailwind breakpoints
- Clean folder structure with shared layout component

