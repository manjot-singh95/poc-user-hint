import { useEffect, useState } from "react";
import axios from 'axios';
const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getTestapi = async () => {
      const response = await axios.get(
        "https://poc-user-hint.vercel.app"
      );
      setData(response.data);
    };
    getTestapi();
  }, []);

  return (
    <div >
      <span className="App">welcome to the demo app</span>
      <h6>{data?.msg}</h6>
    </div>
  );
};

export default App;