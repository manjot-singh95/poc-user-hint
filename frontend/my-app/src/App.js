import { useEffect, useState } from "react";
import axios from 'axios';
const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getTestapi = async () => {
      const response = await axios.get(
        "https://poc-user-hint-jltk088i1-manjot-singh95.vercel.app"
      );
      setData(response.data);
    };
    getTestapi();
  }, []);

  return (
    <div className="App">
      <h6>{data?.msg}</h6>
    </div>
  );
};

export default App;