import React, { useState } from 'react';
import './Styles/App/index.scss';
import { NavBar } from './Components';

function App() {
  const [ activeSection, setActiveSection ] = useState(null);

  const topNavState = { active: activeSection, setActive: setActiveSection };

  return (
    <div className="App">
      <NavBar id={ "topNav" } navState={ topNavState }/>
      <NavBar id={ "socials" } navState={ topNavState }/>
      <main className="Main">

      </main>
    </div>
  );
}

export default App;
