import { FC, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchTestData } from "./services/testService";

const App: FC = () => {
  const [testData, setTestData] = useState<string>();

  useEffect(() => {
    const getHelloData = async () => {
      try {
        const data = await fetchTestData();
        setTestData(data.message);
      } catch (error) {
        console.warn(error);
      }
    };
    getHelloData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {testData}
        </a>
      </header>
    </div>
  );
};

export default App;
