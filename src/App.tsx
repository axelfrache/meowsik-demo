import './App.css'

// Icônes pour les caractéristiques
const MusicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
)

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
)

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

// Icône GitHub
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

function App() {
  return (
    <div className="container">
      {/* Section Héro */}
      <section className="hero">
        <img src="/nelson.svg" alt="Nelson, la mascotte de Meowsik" className="mascot" />
        <span className="coming-soon">Coming Soon</span>
        <h1 className="title">Meowsik</h1>
        <p className="subtitle">
          Supporting independent musicians - Follow the journey of our indie band through our upcoming mobile app
        </p>
      </section>

      {/* Section Caractéristiques */}
      <section className="features">
            <div className="feature">
              <div className="feature-icon"><MusicIcon /></div>
              <h3 className="feature-title">Exclusive Content</h3>
              <p className="feature-description">Get access to unreleased tracks, behind-the-scenes footage, and the creative process of our indie band.</p>
            </div>

            <div className="feature">
              <div className="feature-icon"><CalendarIcon /></div>
              <h3 className="feature-title">Tour Updates</h3>
              <p className="feature-description">Be the first to know about upcoming gigs, album releases and special events in your area.</p>
            </div>

            <div className="feature">
              <div className="feature-icon"><MapPinIcon /></div>
              <h3 className="feature-title">Local Scene</h3>
              <p className="feature-description">Connect with fellow fans and discover the vibrant local music scene through community meet-ups.</p>
            </div>
      </section>

      {/* Footer */}
      <footer className="footer">
            <div className="creator-section">
              <h4 className="creator-title">Our Development Team</h4>
              <div className="creators">
                <a href="https://github.com/axelfrache" target="_blank" rel="noopener noreferrer" className="creator-card">
                  <GithubIcon />
                  <span className="creator-name">Axel</span>
                </a>
                <a href="https://github.com/aurianecodebien" target="_blank" rel="noopener noreferrer" className="creator-card">
                  <GithubIcon />
                  <span className="creator-name">Auriane</span>
                </a>
                <a href="https://github.com/surina-margarita" target="_blank" rel="noopener noreferrer" className="creator-card">
                  <GithubIcon />
                  <span className="creator-name">Margo</span>
                </a>
              </div>
            </div>
            <p>© {new Date().getFullYear()} Meowsik. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
