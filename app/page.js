import Image from "next/image";

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="hero section">
        <div className="hero-brand">
          <p className="eyebrow">NeurIPS Competition</p>
          <Image
            className="neurips-logo"
            src="/neurips_logo.png"
            alt="Neural Information Processing Systems"
            width={500}
            height={226}
            priority
          />
        </div>
        <div className="hero-grid">
          <div className="hero-main">
            <p className="hero-kicker">
              A physics experiment design competition for gravitational-wave
              detectors
            </p>
            <h1>Learn2Design</h1>
            <p className="hero-copy">
              Submit optimization algorithms, not fixed designs. Each method
              tunes roughly 200 continuous parameters for a detector topology
              under a 4-hour evaluation budget using a differentiable simulator.
            </p>
            <div className="hero-question">
              <p className="label">Central question</p>
              <p className="hero-question-text">
                Can machine learning discover experimental designs that go
                beyond human intuition while remaining physically meaningful and
                experimentally constrained?
              </p>
            </div>
            <div className="hero-stats" aria-label="Competition highlights">
              <article className="section-card">
                <p className="card-label">Simulator</p>
                <h3 className="card-title">Differometor</h3>
                <p className="card-copy">
                  JAX-based autodifferentiable simulator for gravitational-wave
                  detector design.
                </p>
              </article>
              <article className="section-card">
                <p className="card-label">Design archive</p>
                <h3 className="card-title">30,000 high-quality designs</h3>
                <p className="card-copy">
                  Released detector blueprints for learning, warm starts, and
                  search.
                </p>
              </article>
              <article className="section-card">
                <p className="card-label">Prize pool</p>
                <h3 className="card-title">EUR 25,000</h3>
                <p className="card-copy">
                  Sponsored by SPRIN-D for the top-performing methods on hidden
                  topologies.
                </p>
              </article>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="tasks">
        <div className="section-heading">
          <p className="eyebrow">What To Do</p>
          <h2>Three steps to compete</h2>
        </div>
        <div className="task-grid">
          <article className="section-card">
            <p className="card-label">Step 01</p>
            <h3 className="card-title">Study the starter kit</h3>
            <p className="card-copy">
              Use the{" "}
              <a
                className="inline-link"
                href="https://github.com/artificial-scientist-lab/Learn2Design-2026"
                target="_blank"
                rel="noreferrer"
              >
                starter kit in the official GitHub repository
              </a>
              , plus the simulator, dataset, and baselines, to understand the
              search space and evaluation setup.
            </p>
          </article>
          <article className="section-card">
            <p className="card-label">Step 02</p>
            <h3 className="card-title">Design your algorithm</h3>
            <p className="card-copy">
              Tune roughly 200 continuous parameters for each topology within the
              4-hour evaluation budget.
            </p>
          </article>
          <article className="section-card">
            <p className="card-label">Step 03</p>
            <h3 className="card-title">Submit one Python entry</h3>
            <p className="card-copy">
              Submit a single Python class implementing the competition interface
              and evaluate it on the public tasks.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="submission">
        <div className="section-heading">
          <p className="eyebrow">Submission</p>
          <h2>Key dates and format</h2>
        </div>
        <div className="info-grid">
          <article className="section-card">
            <p className="card-label">Portal status</p>
            <h3 className="card-title">
              Submission opens in mid-July 2026.
            </h3>
            <p className="card-copy">
              Public leaderboard updates begin in August. Final submission
              deadline: 30 October 2026.
            </p>
          </article>
          <article className="section-card">
            <p className="card-label">What to submit</p>
            <h3 className="card-title">One algorithm class</h3>
            <p className="card-copy">
              Submit a single <code>.py</code> file, plus an optional{" "}
              <code>requirements.txt</code>.
            </p>
          </article>
          <article className="section-card">
            <p className="card-label">How scoring works</p>
            <h3 className="card-title">
              Average best loss over 10 hidden topologies
            </h3>
            <p className="card-copy">Lower is better.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
