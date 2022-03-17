import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Name | Number | Email </p>
        <a
          className="App-linkedIn"
          href="https://www.linkedin.com/in/boneysaju24/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
          <p>
            <a
              className="App-github"
              href="https://github.com/boneysaju"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </a>
      </header>

      <main>
        <p align="centre">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p class="flex">
          <p align="left">
            Some skills I have:
            <ul>
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
            </ul>
          </p>
          <a text-align="justify">Some of my experience </a>
        </p>

        <h3 class="tA">
          <span>My first sentence</span>
          <a content="" display="inline-block" width="100 %">
            My second sentence{" "}
          </a>
        </h3>
      </main>
    </div>
  );
}

export default App;
