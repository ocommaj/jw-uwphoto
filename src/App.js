import React, { useState } from 'react';
import './Styles/App/index.scss';
import { NavBar } from './Components';

function App() {
  const [ activeSectionId, setActiveSectionId ] = useState(null);

  return (
    <div className="App">
      <NavBar />

      <main className="Main">

      </main>
    </div>
  );
}

export default App;
