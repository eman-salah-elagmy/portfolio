

const projects = [
  {
    name: "Project1",
    description: "موقع ويب لتعلم TypeScript باستخدام React.",
    tech: "React + TypeScript + Vite",
    link: "https://engemn.github.io/PROJECT1/",
  },
  {
    name: "Project2",
    description: "مشروع تدريب Frontend مع React و TypeScript.",
    tech: "React + TypeScript + TailwindCSS",
    link: "https://engemn.github.io/PROJECT2/",
  },
];

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <header>
        <h1>Eman Salah </h1>
        <h3>Frontend Developer</h3>
        <p>
          I build interactive and responsive web applications using React and
          TypeScript.
        </p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I am a Frontend Developer specializing in React and TypeScript. I love
          building clean, responsive, and user-friendly web applications.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        {projects.map((proj, index) => (
          <div key={index} style={{ marginBottom: "1rem" }}>
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <p>
              <strong>Tech:</strong> {proj.tech}
            </p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
        <p>
          React, TypeScript, JavaScript, HTML, CSS, TailwindCSS, Git, GitHub
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: eng.emnsalah@gmail.com</p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/engEmn"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/engEmn
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/eman-salah-514012291/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/eman-salah-514012291/
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
