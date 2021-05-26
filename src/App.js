import React, { useState } from 'react';
import './Styles/App/index.scss';
import { NavBar } from './Components';
import { MainContentContainer } from './Containers'
import { ContactSection, GallerySection } from './ContentSections'

function App() {
  const [ activeSection, setActiveSection ] = useState(null);

  const topNavState = { active: activeSection, setActive: setActiveSection };

  return (
    <div className="App">
      <NavBar id={ "topNav" } navState={ topNavState }/>
      <NavBar id={ "socials" } />
      <MainContentContainer>
        { activeSection === 'contact' && <ContactSection /> }
        { activeSection === 'gallery' && <GallerySection /> }
      </MainContentContainer>
    </div>
  );
}

export default App;
