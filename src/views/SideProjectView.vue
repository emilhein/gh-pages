<template>
  <div class="side-project-view">
    <div class="content-wrapper">
      <h1>SparBenzin.dk</h1>
      <p class="subtitle">A technical deep dive into a modern, serverless fuel price tracker.</p>

      <div class="card intro-card">
        <h2>What is it?</h2>
        <p>
          SparBenzin is a Progressive Web App (PWA) designed to help Danish drivers find the cheapest fuel prices in real-time. 
          It aggregates data from multiple sources, normalizes it, and presents it via a fast, map-based interface.
        </p>
        <div class="stats-row">
          <div class="stat">
            <span class="value">2000+</span>
            <span class="label">Stations Tracked</span>
          </div>
          <div class="stat">
            <span class="value">Daily</span>
            <span class="label">Updates</span>
          </div>
          <div class="stat">
            <span class="value">100%</span>
            <span class="label">Serverless</span>
          </div>
        </div>
      </div>

      <div class="tech-stack-section">
        <h2>The Stack</h2>
        <div class="stack-grid">
          <div class="stack-item">
            <h3>Frontend</h3>
            <ul>
              <li><strong>Vue 3</strong> (Composition API)</li>
              <li><strong>Vite</strong> for ultra-fast builds</li>
              <li><strong>Google Maps JS API</strong> for visualization</li>
              <li><strong>Chart.js</strong> for price history</li>
              <li><strong>PWA</strong> via VitePWA</li>
            </ul>
          </div>
          <div class="stack-item">
            <h3>Backend</h3>
            <ul>
              <li><strong>AWS Lambda</strong> (Node.js)</li>
              <li><strong>Serverless Framework</strong></li>
              <li><strong>DuckDB</strong> (WASM) for analytics</li>
              <li><strong>S3</strong> for "Data Lake" storage</li>
              <li><strong>DynamoDB</strong> for hot data</li>
            </ul>
          </div>
          <div class="stack-item">
            <h3>DevOps</h3>
            <ul>
              <li><strong>GitHub Actions</strong> CI/CD</li>
              <li><strong>Cloudflare Pages</strong> hosting</li>
              <li><strong>Sentry</strong> for monitoring</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="architecture-section">
        <h2>Architecture</h2>
        <p>The system operates on an event-driven, serverless architecture designed for near-zero cost and high scalability.</p>
        
        <div class="architecture-diagram">
            <div class="diagram-step">
                <div class="step-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                </div>
                <span class="step-text"><strong>Scrapers</strong> (Lambda) fetch data from APIs (Q8, Circle K, etc.)</span>
            </div>
            <div class="arrow">↓</div>
            <div class="diagram-step">
                <div class="step-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                </div>
                <span class="step-text"><strong>DynamoDB</strong> stores latest station/price state</span>
            </div>
            <div class="arrow">↓</div>
            <div class="diagram-step">
                <div class="step-icon-wrapper">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                </div>
                <span class="step-text"><strong>S3 Parquet</strong> archives history for analytics</span>
            </div>
             <div class="arrow">↓</div>
            <div class="diagram-step">
                <div class="step-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                </div>
                <span class="step-text"><strong>Frontend</strong> fetches standardized JSON from API Gateway</span>
            </div>
        </div>
      </div>

      <div class="challenges-section">
        <h2>Challenges Solved</h2>
        <ul class="challenges-list">
          <li>
            <strong>Data Normalization:</strong> Every company uses different product names ("Miles Diesel", "GoEasy Diesel"). 
            We built a robust normalization engine to map these to standard types (E10, Diesel, Premium).
          </li>
          <li>
            <strong>Station Matching:</strong> Merging data from different sources (lat/lon vs address) to avoid duplicates using fuzzy matching.
          </li>
          <li>
            <strong>Performance:</strong> Optimizing map rendering for ~2500 markers using clustering and efficient state management.
          </li>
        </ul>
      </div>

      <div class="features-section">
        <h2>Personalization & Accounts</h2>
        <p>
          Beyond simple price checking, SparBenzin offers a personalized experience that adapts to each driver's needs.
        </p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h3>User Profiles</h3>
            <p>Secure authentication allows users to save their preferences and access them across devices (Mobile & Web).</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"/><path d="M5 12V7a5 5 0 0 1 10 0v5"/><path d="M15 12v10"/></svg>
            </div>
            <h3>Fuel Preferences</h3>
            <p>Drivers can set their default fuel type (Diesel, E10, Premium). The map and lists automatically filter tailored prices.</p>
          </div>
          <div class="feature-card">
             <div class="feature-icon-wrapper">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
             </div>
            <h3>Discount Cards</h3>
            <p>Users can add their loyalty cards (e.g., Circle K Extra, Shell Go+). The app calculates the <em>final</em> price including personal discounts.</p>
          </div>
           <div class="feature-card">
            <div class="feature-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </div>
            <h3>Favorites</h3>
            <p>Save specific local stations to a watchlist for quick access to price history and trends.</p>
          </div>
        </div>
      </div>

       <div class="footer-note">
        <a href="https://sparbenzin.dk" target="_blank" class="cta-button">Visit Live Site</a>
      </div>

    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.side-project-view {
  min-height: 100vh;
  background: #f8fafc;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1e293b;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.25rem;
  color: #64748b;
  margin-bottom: 3rem;
}

.card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #0f172a;
}

h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.75rem;
}

.stats-row {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #f1f5f9;
  padding-top: 1.5rem;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat .value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;
}

.stat .label {
  font-size: 0.875rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.stack-item {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.stack-item ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.stack-item li {
  margin-bottom: 0.5rem;
  padding-left: 1.25rem;
  position: relative;
  font-size: 0.95rem;
  color: #475569;
}

.stack-item li::before {
  content: "•";
  color: #3b82f6;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.architecture-diagram {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.diagram-step {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: #f1f5f9;
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
}

.step-icon { font-size: 1.5rem; }

.arrow { font-size: 1.5rem; color: #94a3b8; }

.challenges-list {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  list-style: none;
}

.challenges-list li {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f1f5f9;
}

.challenges-list li:last-child {
  margin-bottom: 0;
  border-bottom: none;
}

.cta-button {
  display: inline-block;
  background: #10b981;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;
  transition: background 0.2s;
}

.cta-button:hover {
  background: #059669;
}

.footer-note {
    text-align: center;
    margin-top: 3rem;
    padding-bottom: 2rem;
    color: #94a3b8;
}

@media (max-width: 600px) {
  h1 { font-size: 2rem; }
  .stats-row { flex-direction: column; gap: 1rem; }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.feature-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-2px);
  border-color: #cbd5e1;
}

.feature-icon-wrapper {
  background: #f0fdf4;
  color: #10b981;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.step-icon-wrapper {
  background: #eff6ff;
  color: #3b82f6;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #1e293b;
}

.feature-card p {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.5;
}
</style>
