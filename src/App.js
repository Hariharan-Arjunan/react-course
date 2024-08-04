function App() {
  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <span>John </span>
            <span>A</span>
          </div>
          <ul className="nav-links">
            <li>About</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="container">
          <h1 className="title">
            John Abraham <br /> I am Web Developer
          </h1>
        </div>
      </header>
      <main>
        <section className="about_container">
          <h2 className="about_title">About Me</h2>
          <div className="about_content">
            <div className="article">
              <p className="para"> I have completed BE in Anna University</p>
            </div>
            <div className="article">
              <p className="para"> I have completed BE in Anna University</p>
            </div>
          </div>
        </section>
        <section>
          <h2>Experience</h2>
          <div>I know many programming languages</div>
        </section>
      </main>
    </>
  );
}

export default App;
