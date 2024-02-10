import { FC, useEffect, useState } from "react";
import "./App.css";
import { fetchTestData } from "./services/testService";

const App: FC = () => {
  const [helloData, setHelloData] = useState();

  useEffect(() => {
    const getHelloData = async () => {
      try {
        const data = await fetchTestData();
        setHelloData(data.message);
      } catch (error) {
        console.warn(error);
      }
    };
    getHelloData();
  }, []);

  return <div className="">{helloData ?? "Error fetching data"}</div>;
};

export default App;
