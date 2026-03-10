const focusAreas = [
  {
    title: "AI Systems",
    text:
      "Building software and experimental systems that support ambitious inquiry instead of only polished demos.",
  },
  {
    title: "Evolutionary Computation",
    text:
      "Studying search, adaptation, modularity, and open-ended construction in evolving computational systems.",
  },
  {
    title: "Genetic Programming",
    text:
      "Exploring program synthesis through evolutionary processes with an emphasis on hierarchy and compositional reuse.",
  },
];

const workStreams = [
  "Representations that let evolution build deeper organization over time",
  "Executable structures that can be recombined, abstracted, and extended",
  "Research software that makes theory testable through direct experiment",
];

const siteUses = [
  {
    heading: "Research Notes",
    text:
      "Working arguments, technical observations, and attempts to make difficult ideas explicit enough to pressure-test.",
  },
  {
    heading: "Software and Experiments",
    text:
      "Open-source implementations, prototypes, and evolving systems published through GitHub.",
  },
  {
    heading: "Papers and Drafts",
    text:
      "Academic writing in progress, publication-ready work, and the conceptual scaffolding behind it.",
  },
];

function App() {
  return (
    <div className="page-shell">
      <div className="noise" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top">
          Ben Ritter
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#research">Research</a>
          <a href="#direction">Direction</a>
          <a href="#writing">Writing</a>
          <a href="https://github.com/ritter-ben" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">AI • Evolutionary Computation • Genetic Programming</p>
            <h1>
              Research on evolving
              <span> complex hierarchical systems.</span>
            </h1>
            <p className="lede">
              I am Ben Ritter. My work sits at the intersection of AI,
              evolutionary computation, and genetic programming, with a focus on
              how software systems can synthesize, compose, and evolve deeper
              structure instead of remaining shallow optimizers.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://github.com/ritter-ben"
                target="_blank"
                rel="noreferrer"
              >
                Explore GitHub
              </a>
              <a className="button button-secondary" href="#writing">
                What this site will hold
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <p className="panel-kicker">Current orientation</p>
            <div className="signal">
              <span className="signal-label">Primary question</span>
              <strong>
                What kinds of representations let evolution construct richer
                hierarchy over time?
              </strong>
            </div>
            <div className="signal">
              <span className="signal-label">Method</span>
              <strong>
                Theory, experiment design, software systems, and iterative
                empirical research.
              </strong>
            </div>
            <div className="signal">
              <span className="signal-label">Bias</span>
              <strong>
                Toward systems that are logically grounded, testable, and
                capable of nontrivial structural growth.
              </strong>
            </div>
          </aside>
        </section>

        <section className="band" id="research">
          <div className="section-heading">
            <p className="section-kicker">Focus</p>
            <h2>Three active lines of work</h2>
          </div>

          <div className="card-grid">
            {focusAreas.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section" id="direction">
          <article className="statement">
            <p className="section-kicker">Direction</p>
            <h2>Not just better optimization. Better construction.</h2>
            <p>
              Much of my interest is in systems that can evolve new layers of
              organization rather than merely tuning parameters inside a fixed
              form. That points toward questions of modularity, abstraction,
              decomposition, and search over executable structures.
            </p>
          </article>

          <article className="stack-panel">
            <p className="panel-kicker">Current emphasis</p>
            <ul className="work-list">
              {workStreams.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="band" id="writing">
          <div className="section-heading">
            <p className="section-kicker">Site Purpose</p>
            <h2>A public base for research, writing, and code.</h2>
          </div>

          <div className="feature-list">
            {siteUses.map((item) => (
              <article className="feature-row" key={item.heading}>
                <div>
                  <h3>{item.heading}</h3>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-panel">
          <div>
            <p className="section-kicker">Open Work</p>
            <h2>This site is the beginning of a larger research archive.</h2>
          </div>
          <p>
            As the work expands, this site can hold publications, essays,
            project pages, experiment logs, and links into the codebase that
            supports the research.
          </p>
          <a
            className="button button-primary"
            href="https://github.com/ritter-ben"
            target="_blank"
            rel="noreferrer"
          >
            Visit github.com/ritter-ben
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
