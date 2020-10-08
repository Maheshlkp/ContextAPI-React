import React, {useState,Fragment} from 'react';
import ThemeContext from './context/ThemeContext';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';


import Provider from './provider';
import Context from './context';
import './App.css';
import context from './context';

const Agents=()=>{
  return <AgentOne/>
}

const AgentOne=()=>{
  return <AgentTwo/>
}

const AgentTwo=()=>{
  return <AgentBond/>
}

const AgentBond=()=>{
  return(
    <context.Consumer>
      {
        (context)=>(
          <Fragment>
            <h3>Agent Information</h3>
            <p>Mission Name: {context.data.mname}</p>
            <p>Mission Status: {context.data.accept}</p>
            <button onClick={context.isMissionAccepted}>Choot to Accept</button>
          </Fragment>
        )
      }
    </context.Consumer>
  )
}

const App=()=> {
  const themeHook = useState("light")

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header/>
        <HeroSection/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
