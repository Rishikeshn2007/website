function App() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">React starter</p>
        <h1 id="page-title">Your website is ready to ship.</h1>
        <p className="intro">
          Edit <code>src/App.jsx</code> to start building, then deploy this
          project to Vercel in a few clicks.
        </p>
        <a className="button" href="https://vercel.com/new" target="_blank" rel="noreferrer">
          Deploy to Vercel <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  )
}

export default App