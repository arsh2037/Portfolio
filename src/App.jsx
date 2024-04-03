
import './App.css'

function App() {


  return (
    <>
      <h1 className="blink">Coming Soon</h1>
      <div className="card">
        <button onClick={() => window.location.href = "https://drive.google.com/file/d/1wsMxQjJnOPXbQRm7oDVJX2pi51Mb6BFm/view?usp=sharing"}>
          Checkout my CV
        </button>
        <button onClick={() => window.location.href = "hhttps://www.linkedin.com/in/arsh-hasan/"}>
          Connect with me on LinkedIn
        </button>
      </div>
    </>
  )
}

export default App
