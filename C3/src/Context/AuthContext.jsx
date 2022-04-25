import { createContext } from "react";
import { useState } from "react";

export const Authcontext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth,setIsAuth] = useState(false)

  const toggleAuth = ()=>{
    setIsAuth(!isAuth)
  }
  return (
    <Authcontext.Provider value={{isAuth,toggleAuth}}>
      {children}
    </Authcontext.Provider>
  );
};
