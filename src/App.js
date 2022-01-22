import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="img-fluid App-logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project coded by mahdesign and is{" "}
            <a
              href="https://github.com/mahdesign/dictionary-project"
              target="_blank"
            >
              open-sourced on Github
            </a>
            and{" "}
            <a
              href="https://fervent-hamilton-990eec.netlify.app/"
              target="_blank"
            >
              Hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
