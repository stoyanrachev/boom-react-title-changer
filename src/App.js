import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  const onClick = (e) => {
    setCount(count + 1);
  }

  useEffect(() => {
    document.title = "Count (" + count + ")";
  }, [count]);
  
  return (
    <div className="App">
      <button onclick={onClick}>Count ({count})</button>
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
      </div>
    </div>
  );
}

export default App;
