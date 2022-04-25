import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Stactics = createContext();

export const StacticsContextProvider = ({ children }) => {
  const [datas, setdata] = useState([]);
  let terminated = 0;
  const [pramoted, setpramoted] = useState(0);
  const [newuser, setnewuser] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:8080/employee").then(({ data }) => {
      setdata(data);
    });
  }, []);
  let length = datas.length;
  if (datas.status === "terminated") {
    terminated++;
  }

  return (
    <Stactics.Provider value={{ length, terminated, pramoted, newuser }}>
      {children}
    </Stactics.Provider>
  );
};
