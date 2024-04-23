
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            {/* <img
              src="/imgs/alsiam.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            /> */}
            <h1>Arsh Hasan</h1>
            <p>Software Engineer</p>
            <div className="social-links">
             
              <a href="https://github.com/arsh2037" target="_blank">
                <i className="fa fa-github" />
              </a>
            
              <a href="https://www.linkedin.com/in/arsh-hasan/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
