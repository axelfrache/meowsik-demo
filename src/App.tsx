import './App.css'

// Icônes pour les caractéristiques
const HeadphonesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
  </svg>
)

const CompassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
  </svg>
)

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
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
          An innovative music streaming platform offering an immersive and personalized musical experience
        </p>

      </section>

      {/* Section Caractéristiques */}
      <section className="features">
        <div className="feature">
          <div className="feature-icon"><HeadphonesIcon /></div>
          <h3 className="feature-title">Immersive Experience</h3>
          <p className="feature-description">Dive into a revolutionary listening experience with high-quality sound and interactive features.</p>
        </div>

        <div className="feature">
          <div className="feature-icon"><CompassIcon /></div>
          <h3 className="feature-title">Music Discovery</h3>
          <p className="feature-description">Explore new artists and genres with our advanced recommendation algorithm.</p>
        </div>

        <div className="feature">
          <div className="feature-icon"><UsersIcon /></div>
          <h3 className="feature-title">Active Community</h3>
          <p className="feature-description">Share your playlists and connect with other music lovers who share your tastes.</p>
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
