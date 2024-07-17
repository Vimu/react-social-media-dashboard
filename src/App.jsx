import Header from "./Header"
import Overview from "./Overview"
import Social from "./Social"
import React, {useState} from "react";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handelToggle = () =>{
      setIsDarkMode(!isDarkMode);
  }

 return(
  <div className={`container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
    <Header isDarkMode={isDarkMode} onToggle={handelToggle}/>
    <Social isDarkMode={isDarkMode} />
    <Overview isDarkMode={isDarkMode}/> 
  </div>
 )
}

export default App
